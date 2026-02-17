import { NextRequest, NextResponse } from 'next/server'
import { createInquiry, getAllInquiries, getInquiryStats } from '@/lib/database'

// GET — Retrieve all inquiries
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const status = searchParams.get('status') || undefined

        const inquiries = getAllInquiries(status)
        const stats = getInquiryStats()

        return NextResponse.json({
            success: true,
            inquiries,
            stats,
            total: inquiries.length,
        })
    } catch (error) {
        console.error('GET /api/inquiry error:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to fetch inquiries' },
            { status: 500 }
        )
    }
}

// POST — Save a new inquiry
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, service, message } = body

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'Name, email, and message are required.' },
                { status: 400 }
            )
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, error: 'Please enter a valid email address.' },
                { status: 400 }
            )
        }

        // Save to database
        const inquiry = createInquiry({ name, email, phone, service, message })

        return NextResponse.json({
            success: true,
            message: 'Inquiry submitted successfully!',
            inquiry,
        })
    } catch (error) {
        console.error('POST /api/inquiry error:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to save inquiry. Please try again.' },
            { status: 500 }
        )
    }
}
