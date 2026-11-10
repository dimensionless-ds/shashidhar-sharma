import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({ name: z.string().min(2), email: z.string().email(), organisation: z.string().min(2), eventDate: z.string().min(1), audience: z.string().min(1), location: z.string().min(1), budget: z.string().min(1), message: z.string().min(10), website: z.string().max(0).optional() })

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json())
  if (!parsed.success) return NextResponse.json({ error: "Please complete all fields." }, { status: 400 })
  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "Booking email is not configured yet. Please use WhatsApp below." }, { status: 503 })
  return NextResponse.json({ success: true })
}
