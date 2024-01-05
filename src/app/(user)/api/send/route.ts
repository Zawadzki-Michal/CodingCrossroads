import { EmailTemplate } from '../../../../components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("body", body);
    const { email, name, message, subject } = body;

    // Add a 'text' property to the resend.emails.send options
    const data = await resend.emails.send({
      from: 'info@coding-crossroads.co.uk',
      to: email,
      subject: 'Thank you for contacting us',
      react: EmailTemplate({ firstName: name }),
      text: 'This is the text version of your email', // Add a text property
    });

    // Check if 'status' property exists before using it
    if ('status' in data && data.status === 'success') {
      return NextResponse.json({ message: 'Email sent successfully' });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Something went wrong' });
  }
}
