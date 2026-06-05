import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(data: EmailData) {
  const { to, subject, html } = data;

  const mailOptions = {
    from: `"CabExpress" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error: "Failed to send email" };
  }
}

export function generateEmailTemplate(formName: string, details: Record<string, string>) {
  const rows = Object.entries(details)
    .map(
      ([key, value]) => `
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 40%;">${key}</td>
      <td style="padding: 8px; border: 1px solid #ddd;">${value}</td>
    </tr>`
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>New Inquiry - CabExpress</title>
      </head>
      <body style="font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: #FFC107; padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: #000; font-size: 24px;">CabExpress</h1>
          </div>
          <div style="padding: 30px;">
            <h2 style="margin-top: 0; color: #333;">${formName}</h2>
            <p style="color: #666; margin-bottom: 20px;">You have received a new inquiry. Details are below:</p>
            <table style="width: 100%; border-collapse: collapse;">
              ${rows}
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Date & Time</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString("en-IN")}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666;">
            <p style="margin: 0;">© ${new Date().getFullYear()} CabExpress. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}