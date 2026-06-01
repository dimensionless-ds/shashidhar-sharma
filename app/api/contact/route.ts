import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Using FormSubmit.co - a free email forwarding service
    // This sends emails to dimensionlestudios@gmail.com with CC to shashidhar.sharma@gmail.com
    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("subject", subject)
    formData.append("message", message)
    formData.append("_cc", "shashidhar.sharma@gmail.com")
    formData.append("_subject", `New Contact Form: ${subject}`)
    formData.append("_template", "table")

    const response = await fetch("https://formsubmit.co/ajax/dimensionlestudios@gmail.com", {
      method: "POST",
      body: formData,
    })

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" })
    } else {
      throw new Error("Failed to send message")
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
