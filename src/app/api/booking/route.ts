import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type BookingBody = {
  parentName?: string;
  email?: string;
  phone?: string;
  service?: string;
  preferredTime?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function row(label: string, value: string) {
  if (!value.trim()) return "";
  return `
    <tr>
      <td style="padding:8px 12px;font-weight:600;color:#331e0e;vertical-align:top;white-space:nowrap;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:8px 12px;color:#5e3a1e;">
        ${escapeHtml(value).replaceAll("\n", "<br />")}
      </td>
    </tr>
  `;
}

export async function POST(request: Request) {
  let body: BookingBody;

  try {
    body = (await request.json()) as BookingBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parentName = body.parentName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const preferredTime = body.preferredTime?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!parentName || !email || !service) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and service of interest." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.BOOKING_TO_EMAIL;
  const fromEmail =
    process.env.BOOKING_FROM_EMAIL ||
    "Trutalk Therapy <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or BOOKING_TO_EMAIL");
    return NextResponse.json(
      {
        error:
          "Booking is temporarily unavailable. Please email us directly.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const submittedAt = new Date().toLocaleString("en-CA", {
    timeZone: "America/Toronto",
    dateStyle: "full",
    timeStyle: "short",
  });

  const html = `
    <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;color:#331e0e;">
      <h1 style="font-size:22px;margin:0 0 8px;">New appointment request</h1>
      <p style="margin:0 0 20px;color:#5e3a1e;font-size:14px;">
        Submitted ${escapeHtml(submittedAt)} (Toronto time)
      </p>
      <table style="width:100%;border-collapse:collapse;background:#fffdf5;border:1px solid #f9df8c;border-radius:12px;">
        ${row("Parent / caregiver", parentName)}
        ${row("Email", email)}
        ${row("Phone", phone)}
        ${row("Service", service)}
        ${row("Preferred times", preferredTime)}
        ${row("Message", message)}
      </table>
    </div>
  `;

  const text = [
    "New appointment request",
    `Submitted: ${submittedAt} (Toronto time)`,
    "",
    `Parent / caregiver: ${parentName}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Service: ${service}`,
    `Preferred times: ${preferredTime || "—"}`,
    `Message: ${message || "—"}`,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Appointment request: ${service} — ${parentName}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      const message =
        typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof error.message === "string"
          ? error.message
          : "Could not send your request. Please try again shortly.";

      const isDomainIssue =
        message.toLowerCase().includes("domain") ||
        message.toLowerCase().includes("not verified");

      return NextResponse.json(
        {
          error: isDomainIssue
            ? "Email sender is not verified. Set BOOKING_FROM_EMAIL to Trutalk Therapy <onboarding@resend.dev> for testing, or verify your domain in Resend."
            : "Could not send your request. Please try again shortly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Booking email failed:", err);
    return NextResponse.json(
      { error: "Could not send your request. Please try again shortly." },
      { status: 502 },
    );
  }
}
