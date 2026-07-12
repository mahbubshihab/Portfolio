import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend instance starts with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "contact@mahbubshihab.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    // 1. Send Notification Email to Mahbub Shihab
    const notificationHtml = `
      <div style="background-color: #030014; padding: 40px 20px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #e0e7ff; min-height: 100%;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #0f0f28; border: 1px solid #25255a; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);">
          <div style="height: 6px; background: linear-gradient(90deg, #00d4ff 0%, #7c3aed 100%);"></div>
          <div style="padding: 40px 30px;">
            <div style="margin-bottom: 25px;">
              <span style="font-size: 10px; font-family: monospace; text-transform: uppercase; letter-spacing: 2px; color: #00d4ff; font-weight: bold; display: block; margin-bottom: 8px;">[SYSTEM PORTAL INCOMING]</span>
              <h2 style="font-size: 22px; font-weight: 800; margin: 0; color: #ffffff; letter-spacing: -0.025em; line-height: 1.2;">New Inquiry Received_</h2>
            </div>
            <div style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 24px; margin-bottom: 25px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="width: 48px; vertical-align: middle; padding-right: 14px;">
                    <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%); text-align: center; font-size: 22px; line-height: 48px; color: #ffffff;">
                      👤
                    </div>
                  </td>
                  <td style="vertical-align: middle;">
                    <div style="font-size: 15px; font-weight: 700; color: #ffffff; margin-bottom: 2px; line-height: 1.3;">${name}</div>
                    <div style="font-size: 12px; color: rgba(224, 231, 255, 0.6); font-family: monospace; word-break: break-all; line-height: 1.2;">
                      <a href="mailto:${email}" style="color: #00d4ff; text-decoration: none; border-bottom: 1px dashed rgba(0, 212, 255, 0.4);">${email}</a>
                    </div>
                  </td>
                </tr>
              </table>
              <div style="height: 1px; background-color: rgba(255, 255, 255, 0.08); margin: 0 0 20px 0;"></div>
              <div style="font-size: 14px; line-height: 1.6; color: rgba(224, 231, 255, 0.85); white-space: pre-wrap; font-style: italic; border-left: 3px solid #7c3aed; padding-left: 14px; margin: 0; word-break: break-word;">
                ${message}
              </div>
            </div>
            <div style="text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(90deg, #00d4ff 0%, #7c3aed 100%); color: #ffffff; font-weight: 700; font-size: 14px; text-decoration: none; border-radius: 12px; box-shadow: 0 8px 20px rgba(0, 212, 255, 0.2);">
                Reply Directly via Email
              </a>
            </div>
            <p style="text-align: center; font-size: 10px; color: rgba(224, 231, 255, 0.3); font-family: monospace; margin: 25px 0 0 0; text-transform: uppercase; letter-spacing: 1px; line-height: 1.4;">
              Sent automatically from mahbubshihab.com portfolio
            </p>
          </div>
        </div>
      </div>
    `;

    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: fromEmail,
      to: receiverEmail,
      subject: `New Message from ${name}`,
      html: notificationHtml,
      replyTo: email,
    });

    if (notificationError) {
      console.error("Resend Notification Error:", notificationError);
      return NextResponse.json(
        { error: "Failed to send notification email. Please try again." },
        { status: 500 }
      );
    }

    // 2. Send Auto-Reply to the Visitor (only if the domain is verified)
    if (fromEmail !== "onboarding@resend.dev") {
      const autoReplyHtml = `
        <div style="background-color: #030014; padding: 40px 20px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #e0e7ff; min-height: 100%;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #0f0f28; border: 1px solid #25255a; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);">
            <div style="height: 6px; background: linear-gradient(90deg, #00d4ff 0%, #7c3aed 100%);"></div>
            <div style="padding: 40px 30px; box-sizing: border-box; text-align: center;">
              <div style="font-size: 40px; margin-bottom: 20px;">✉️</div>
              <h2 style="font-size: 22px; font-weight: 800; margin: 0 0 15px 0; color: #ffffff; letter-spacing: -0.025em; line-height: 1.2;">Hi ${name}, Message Received!_</h2>
              <p style="font-size: 14px; line-height: 1.6; color: rgba(224, 231, 255, 0.8); margin: 0 0 25px 0; font-weight: 300;">
                Thank you for reaching out through my portfolio. I have received your message and will review it shortly. I typically respond within 24 hours.
              </p>
              <div style="background-color: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 16px; margin-bottom: 30px; text-align: left; box-sizing: border-box;">
                <span style="font-size: 10px; font-family: monospace; color: #7c3aed; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 8px;">Your Message Copy:</span>
                <p style="font-size: 13px; line-height: 1.5; color: rgba(224, 231, 255, 0.6); margin: 0; font-style: italic; word-break: break-word;">
                  "${message}"
                </p>
              </div>
              <div style="margin-bottom: 30px;">
                <a href="https://wa.me/8801521798452" style="display: inline-block; padding: 14px 32px; background: linear-gradient(90deg, #128c7e 0%, #25d366 100%); color: #ffffff; font-weight: 700; font-size: 14px; text-decoration: none; border-radius: 12px; box-shadow: 0 8px 20px rgba(37, 211, 102, 0.15);">
                  Need Urgent Response? WhatsApp Me
                </a>
              </div>
              <p style="font-size: 10px; color: rgba(224, 231, 255, 0.3); font-family: monospace; margin: 0; text-transform: uppercase; letter-spacing: 1px; line-height: 1.4;">
                Mahbub Shihab • AI & Full-Stack Developer
              </p>
            </div>
          </div>
        </div>
      `;

      try {
        await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: "Message Received - Mahbub Shihab",
          html: autoReplyHtml,
          replyTo: receiverEmail,
        });
      } catch (autoReplyErr) {
        console.error("Auto-reply failed to send:", autoReplyErr);
      }
    }

    return NextResponse.json({ success: true, message: "Inquiry sent successfully!" });
  } catch (error: any) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
