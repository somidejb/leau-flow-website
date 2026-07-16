import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/quote-schema";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = quoteFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // TEMPLATE INTEGRATION POINT: this is where a real deployment would:
  //   1. Upload any attached photos to object storage (Vercel Blob, S3, etc.)
  //      — the client only sends a photo *count* today, not file bytes.
  //   2. Send the lead to email/SMS/CRM (e.g. Resend, Twilio, a webhook to
  //      a CRM like Jobber or ServiceTitan).
  // For now we just log server-side so the flow is inspectable in dev.
  console.log("New quote request:", parsed.data);

  return NextResponse.json({ ok: true });
}
