"use client"
import { useState } from "react"

export default function BookingForm() {
  const [status, setStatus] = useState("")
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("Sending…")
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const response = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    const result = await response.json(); setStatus(result.success ? "Thank you — the enquiry has been received." : result.error)
  }
  return <form onSubmit={submit} className="grid gap-4 rounded-sm border border-border bg-card p-6 md:grid-cols-2">
    {[["name","Name"],["email","Work email"],["organisation","Organisation"],["eventDate","Event date"],["audience","Audience type and size"],["location","Location"]].map(([name,label]) => <label key={name} className="grid gap-2 text-sm font-medium">{label}<input required name={name} type={name === "email" ? "email" : name === "eventDate" ? "date" : "text"} className="h-11 border border-input bg-background px-3" /></label>)}
    <label className="grid gap-2 text-sm font-medium">Budget range<select required name="budget" className="h-11 border border-input bg-background px-3"><option value="">Select a range</option><option>Under [REPLACE: budget range]</option><option>[REPLACE: budget range]</option></select></label>
    <label className="grid gap-2 text-sm font-medium md:col-span-2">Message<textarea required minLength={10} name="message" rows={5} className="border border-input bg-background p-3" /></label>
    <input aria-hidden="true" tabIndex={-1} autoComplete="off" name="website" className="hidden" />
    <button className="h-12 bg-foreground px-6 text-background md:col-span-2">Send enquiry</button>
    {status && <p role="status" className="text-sm text-muted-foreground md:col-span-2">{status}</p>}
  </form>
}
