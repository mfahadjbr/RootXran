'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full h-full max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8 border-2 shadow-2xl border-gray-300 rounded-xl m-[10rem]">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-primary-foregroun text-black">RootXran</h1>
      </div>
      <form className="mt-8 space-y-6" action="https://formspree.io/f/xdknbvpg" method='POST'>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" className="rounded-[7px]" type="text" placeholder="Enter your name"  name="Name" autoComplete="off" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" className="rounded-[7px]" type="email" placeholder="Enter your email" name="Email" autoComplete="off" required />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message"  className="rounded-[7px]" placeholder="Enter your message" rows={4} name="Message" autoComplete="off" required />
        </div>
        <Button type="submit" value={"Submit"} className="w-full bg-black text-white rounded-[7px]">
          Submit
        </Button>
      </form>
    </div>
  )
}