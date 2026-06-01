import { createRazorpayOrder } from "@/lib/razorpay-utils"

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 })
  }

  try {
    const body = await req.json()
    const { amount, description, type } = body

    if (!amount || !description) {
      return Response.json(
        { error: "Amount and description are required" },
        { status: 400 }
      )
    }

    const result = await createRazorpayOrder(amount, description)

    if (!result.success) {
      return Response.json({ error: result.error }, { status: 500 })
    }

    return Response.json({
      success: true,
      orderId: result.orderId,
      amount: result.amount,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    })
  } catch (error) {
    console.error("API error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
