import { NextRequest, NextResponse } from 'next/server'
import { getInquiryById, updateInquiryStatus, deleteInquiry } from '@/lib/database'

// GET — Get single inquiry
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const inquiry = getInquiryById(parseInt(id))
        if (!inquiry) {
            return NextResponse.json({ success: false, error: 'Inquiry not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, inquiry })
    } catch (error) {
        console.error('GET /api/inquiry/[id] error:', error)
        return NextResponse.json({ success: false, error: 'Failed to fetch inquiry' }, { status: 500 })
    }
}

// PATCH — Update inquiry status
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const { status } = await request.json()

        if (!['new', 'read', 'replied', 'archived'].includes(status)) {
            return NextResponse.json(
                { success: false, error: 'Invalid status. Use: new, read, replied, archived' },
                { status: 400 }
            )
        }

        const inquiry = updateInquiryStatus(parseInt(id), status)
        if (!inquiry) {
            return NextResponse.json({ success: false, error: 'Inquiry not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, inquiry })
    } catch (error) {
        console.error('PATCH /api/inquiry/[id] error:', error)
        return NextResponse.json({ success: false, error: 'Failed to update inquiry' }, { status: 500 })
    }
}

// DELETE — Delete inquiry
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const deleted = deleteInquiry(parseInt(id))
        if (!deleted) {
            return NextResponse.json({ success: false, error: 'Inquiry not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, message: 'Inquiry deleted successfully' })
    } catch (error) {
        console.error('DELETE /api/inquiry/[id] error:', error)
        return NextResponse.json({ success: false, error: 'Failed to delete inquiry' }, { status: 500 })
    }
}
