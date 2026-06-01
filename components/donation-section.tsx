"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { RazorpayPayment } from "@/components/razorpay-payment"

const donationAmounts = [100, 250, 500, 1000, 2500, 5000]

export function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState(500)
  const [showPayment, setShowPayment] = useState(false)

  return (
    <div className="mt-8 p-6 bg-secondary/30 border border-border rounded-xl">
      <div className="flex items-start gap-3 mb-4">
        <Heart className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
        <div>
          <p className="font-medium text-foreground">Support the Mission</p>
          <p className="text-sm text-muted-foreground">
            Your donations help us create more content, books, and speaking opportunities dedicated to leadership and personal growth.
          </p>
        </div>
      </div>

      {!showPayment ? (
        <>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {donationAmounts.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? "default" : "outline"}
                className={`text-sm ${
                  selectedAmount === amount
                    ? "gold-gradient text-foreground"
                    : "border-border hover:border-gold"
                }`}
                onClick={() => setSelectedAmount(amount)}
              >
                ₹{amount}
              </Button>
            ))}
          </div>
          <Button
            onClick={() => setShowPayment(true)}
            className="w-full gold-gradient text-foreground hover:opacity-90 font-medium"
          >
            <Heart className="w-4 h-4 mr-2" />
            Donate ₹{selectedAmount}
          </Button>
        </>
      ) : (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Selected amount: ₹{selectedAmount}</p>
          <RazorpayPayment
            amount={selectedAmount}
            description="Donation to Support Shashidhar Sharma's Work"
            type="donation"
            onSuccess={() => {
              setShowPayment(false)
              alert("Thank you for your generous support!")
            }}
            onError={(error) => {
              console.error(error)
              setShowPayment(false)
            }}
          />
          <Button
            variant="outline"
            onClick={() => setShowPayment(false)}
            className="w-full"
          >
            Back
          </Button>
        </div>
      )}
    </div>
  )
}
