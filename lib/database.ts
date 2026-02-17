import Database from 'better-sqlite3'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'data', 'themac.db')

let db: Database.Database | null = null

export function getDb(): Database.Database {
    if (!db) {
        db = new Database(DB_PATH)
        db.pragma('journal_mode = WAL')
        db.pragma('foreign_keys = ON')
        initTables()
    }
    return db
}

function initTables() {
    const database = db!

    // Inquiries table
    database.exec(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT DEFAULT '',
      service TEXT DEFAULT 'Not specified',
      message TEXT NOT NULL,
      status TEXT DEFAULT 'new' CHECK(status IN ('new', 'read', 'replied', 'archived')),
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

    // Create index on status for filtering
    database.exec(`
    CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status)
  `)

    // Create index on submitted_at for sorting
    database.exec(`
    CREATE INDEX IF NOT EXISTS idx_inquiries_date ON inquiries(submitted_at DESC)
  `)
}

// --- Inquiry Operations ---

export interface Inquiry {
    id: number
    name: string
    email: string
    phone: string
    service: string
    message: string
    status: string
    submitted_at: string
    updated_at: string
}

export function createInquiry(data: {
    name: string
    email: string
    phone?: string
    service?: string
    message: string
}): Inquiry {
    const db = getDb()
    const stmt = db.prepare(`
    INSERT INTO inquiries (name, email, phone, service, message)
    VALUES (@name, @email, @phone, @service, @message)
  `)
    const result = stmt.run({
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        service: data.service || 'Not specified',
        message: data.message,
    })
    return getInquiryById(result.lastInsertRowid as number)!
}

export function getInquiryById(id: number): Inquiry | undefined {
    const db = getDb()
    return db.prepare('SELECT * FROM inquiries WHERE id = ?').get(id) as Inquiry | undefined
}

export function getAllInquiries(status?: string): Inquiry[] {
    const db = getDb()
    if (status) {
        return db.prepare('SELECT * FROM inquiries WHERE status = ? ORDER BY submitted_at DESC').all(status) as Inquiry[]
    }
    return db.prepare('SELECT * FROM inquiries ORDER BY submitted_at DESC').all() as Inquiry[]
}

export function updateInquiryStatus(id: number, status: string): Inquiry | undefined {
    const db = getDb()
    db.prepare('UPDATE inquiries SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(status, id)
    return getInquiryById(id)
}

export function deleteInquiry(id: number): boolean {
    const db = getDb()
    const result = db.prepare('DELETE FROM inquiries WHERE id = ?').run(id)
    return result.changes > 0
}

export function getInquiryStats() {
    const db = getDb()
    const total = (db.prepare('SELECT COUNT(*) as count FROM inquiries').get() as { count: number }).count
    const newCount = (db.prepare("SELECT COUNT(*) as count FROM inquiries WHERE status = 'new'").get() as { count: number }).count
    const readCount = (db.prepare("SELECT COUNT(*) as count FROM inquiries WHERE status = 'read'").get() as { count: number }).count
    const repliedCount = (db.prepare("SELECT COUNT(*) as count FROM inquiries WHERE status = 'replied'").get() as { count: number }).count
    return { total, new: newCount, read: readCount, replied: repliedCount }
}
