import { NextResponse } from "next/server"

// In a production app, you would connect to MongoDB here
// For now, we'll simulate storing messages and log them

interface ContactMessage {
  name: string
  email: string
  message: string
  createdAt: Date
}

// Simulated in-memory storage (replace with MongoDB in production)
const messages: ContactMessage[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Create message object
    const newMessage: ContactMessage = {
      name,
      email,
      message,
      createdAt: new Date(),
    }

    // Store message (in production, save to MongoDB)
    messages.push(newMessage)

    // Log the message for verification
    console.log("New contact message received:", newMessage)

    // In production, you could also send an email notification here
    // using Nodemailer or a service like SendGrid/Resend

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  // This endpoint can be used to retrieve messages (protected in production)
  return NextResponse.json({ messages })
}
