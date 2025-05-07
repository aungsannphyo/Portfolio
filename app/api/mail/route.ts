import nodemailer, { SentMessageInfo } from 'nodemailer';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.SMTP_RECEIVER,
        replyTo: email,
        subject: `New Contact from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #ffffff; color: #000000; padding: 24px; border: 1px solid #000000; max-width: 600px; margin: auto;">
            <h2 style="margin-bottom: 8px; font-size: 24px;">📩 New Message from <a href="https://aungsannphyo.me" style="color: #000; text-decoration: underline;">aungsannphyo.me</a>.</h2>
            <hr style="border: none; border-top: 1px solid #000; margin: 16px 0;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 12px; border: 1px dashed #333; margin-top: 6px;">
            <pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${message}</pre>
            </div>
            <hr style="border: none; border-top: 1px solid #000; margin: 24px 0;" />
            <footer style="text-align: center; font-size: 12px; color: #666;">
            Sent from <a href="https://aungsannphyo.me" style="color: #000; text-decoration: underline;">aungsannphyo.me</a>.
            </footer>
        </div>
        `,
    };

    try {
        const info: SentMessageInfo = await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (error) {
        console.error("Mail send error:", error);
        return NextResponse.json({ success: false, error: error || 'Unknown error' });
    }
}