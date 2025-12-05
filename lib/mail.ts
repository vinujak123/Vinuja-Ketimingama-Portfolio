import nodemailer from "nodemailer";

// Gmail SMTP Configuration
const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || process.env.GMAIL_USER,
    pass: process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendContactEmail(payload: {
  name: string;
  email: string;
  message: string;
}) {
  const to = process.env.CONTACT_TO_EMAIL;

  if (!to) {
    throw new Error("CONTACT_TO_EMAIL is not configured");
  }

  const html = `
    <h2>New portfolio contact</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.message.replace(/\n/g, "<br />")}</p>
  `;

  await transport.sendMail({
    from: {
      name: payload.name || "Portfolio Contact",
      address: process.env.SMTP_FROM ?? to,
    },
    to,
    replyTo: payload.email,
    subject: "New message from portfolio contact form",
    html,
  });
}




