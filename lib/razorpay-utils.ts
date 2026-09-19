import Razorpay from "razorpay"
import crypto from "crypto"

function getRazorpayInstance() {
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
  const keySecret = process.env.RAZORPAY_SECRET_KEY
  if (!keyId || !keySecret) throw new Error("Razorpay is not configured")
  return new Razorpay({ key_id: keyId, key_secret: keySecret })
}

export async function createRazorpayOrder(amount: number, description: string) {
  try {
    const options = {
      amount: amount * 100, // amount in paise
      currency: "INR",
      description: description,
      receipt: `receipt_${Date.now()}`,
    }

    const order = await getRazorpayInstance().orders.create(options)
    return {
      success: true,
      orderId: order.id,
      amount: order.amount,
    }
  } catch (error) {
    console.error("Razorpay order creation error:", error)
    return {
      success: false,
      error: "Failed to create order",
    }
  }
}

export function verifyPaymentSignature(
  orderId: string,
  paymentId: string,
  signature: string
) {
  const message = `${orderId}|${paymentId}`
  const digest = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY!)
    .update(message)
    .digest("hex")

  return digest === signature
}
