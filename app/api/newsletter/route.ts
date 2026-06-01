import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Using FormSubmit.co - a free email forwarding service
    const formData = new FormData()
    formData.append("email", email)
    formData.append("_subject", "New Newsletter Subscription Request")
    formData.append("message", `New newsletter subscription request from: ${email}`)
    formData.append("_template", "table")

    const response = await fetch("https://formsubmit.co/ajax/dimensionlestudios@gmail.com", {
      method: "POST",
      body: formData,
    })

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Subscribed successfully!" })
    } else {
      throw new Error("Failed to subscribe")
    }
  } catch (error) {
    console.error("Newsletter error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to subscribe. Please try again." },
      { status: 500 }
    )
  }
}
