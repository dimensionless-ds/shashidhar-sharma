import { verifyPaymentSignature } from "@/lib/razorpay-utils"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { orderId, paymentId, signature } = body

    if (!orderId || !paymentId || !signature) {
      return Response.json(
        { error: "Missing payment details" },
        { status: 400 }
      )
    }

    const isValid = verifyPaymentSignature(orderId, paymentId, signature)

    if (!isValid) {
      return Response.json({ error: "Invalid payment signature" }, { status: 400 })
    }

    return Response.json({
      success: true,
      message: "Payment verified successfully",
      paymentId,
      orderId,
    })
  } catch (error) {
    console.error("Verification error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
