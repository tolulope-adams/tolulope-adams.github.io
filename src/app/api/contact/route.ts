import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    pool: true,
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    port: 465,
    secure: true,
    tls: {
        servername: 'smtp.gmail.com',
        rejectUnauthorized: false
      },
    auth: {
      user: 'tolulopeadams700@gmail.com',
      pass: 'clujghrtbgkdvfqv',
    },
  });

  // Configure the mailoptions object
    const mailOptions = {
    from: 'tolulopeadams700@gmail.com',
    to: 'tolulopeadams7000@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}

