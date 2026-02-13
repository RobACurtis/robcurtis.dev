import { Resend } from 'resend';
import { NextRequest } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return Response.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      to: process.env.RECEIVER_EMAIL || 'hello@robcurtis.dev',
      from: process.env.SENDER_EMAIL || 'portfolio@robcurtis.dev',
      replyTo: email,
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      text: `
Portfolio Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject || 'Not specified'}

Message:
${message}
      `,
      html: `
<h2>Portfolio Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
<hr />
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br />')}</p>
      `
    });

    if (response.error) {
      console.error('Resend API Error:', response.error);
      return Response.json(
        { error: 'Failed to send email' },
        { status: 502 }
      );
    }

    return Response.json(
      { message: 'Email sent successfully', data: response },
      { status: 200 }
    );

  } catch (error) {
    console.error('Unhandled error in send-email POST:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
