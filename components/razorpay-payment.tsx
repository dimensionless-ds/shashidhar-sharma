"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Heart } from "lucide-react"

interface RazorpayPaymentProps {
  amount: number
  description: string
  type: "book" | "speaking" | "course" | "donation"
  onSuccess?: (paymentId: string) => void
  onError?: (error: string) => void
}

declare global {
  interface Window {
    Razorpay: any
  }
}

export function RazorpayPayment({
  amount,
  description,
  type,
  onSuccess,
  onError,
}: RazorpayPaymentProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      // Create order
      const orderResponse = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          description,
          type,
        }),
      })

      const orderData = await orderResponse.json()

      if (!orderData.success) {
        throw new Error(orderData.error || "Failed to create order")
      }

      // Load Razorpay script
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.async = true
      script.onload = () => {
        const options = {
          key: orderData.keyId,
          amount: orderData.amount,
          currency: "INR",
          name: "Shashidhar Sharma",
          description: description,
          order_id: orderData.orderId,
          handler: async (response: any) => {
            try {
              // Verify payment
              const verifyResponse = await fetch("/api/razorpay/verify-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  orderId: orderData.orderId,
                  paymentId: response.razorpay_payment_id,
                  signature: response.razorpay_signature,
                }),
              })

              const verifyData = await verifyResponse.json()

              if (verifyData.success) {
                onSuccess?.(response.razorpay_payment_id)
              } else {
                throw new Error("Payment verification failed")
              }
            } catch (error) {
              const errorMessage =
                error instanceof Error ? error.message : "Payment verification failed"
              onError?.(errorMessage)
            } finally {
              setIsLoading(false)
            }
          },
          prefill: {
            name: "Customer",
            email: "customer@example.com",
            contact: "9000000000",
          },
          theme: {
            color: "#D4AF37",
          },
        }

        const rzp = new window.Razorpay(options)
        rzp.open()
      }
      script.onerror = () => {
        throw new Error("Failed to load Razorpay")
      }
      document.body.appendChild(script)
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Payment failed"
      onError?.(errorMessage)
      setIsLoading(false)
    }
  }

  const getButtonLabel = () => {
    switch (type) {
      case "book":
        return `Buy Now (₹${amount})`
      case "speaking":
        return `Book Now (₹${amount})`
      case "course":
        return `Enroll Now (₹${amount})`
      case "donation":
        return (
          <>
            <Heart className="w-4 h-4 mr-2" />
            Support (₹{amount})
          </>
        )
      default:
        return `Pay ₹${amount}`
    }
  }

  return (
    <Button
      onClick={handlePayment}
      disabled={isLoading}
      className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        getButtonLabel()
      )}
    </Button>
  )
}
