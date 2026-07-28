import { NextResponse } from "next/server";

import { feedbackSchema } from "@/lib/feedback-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = feedbackSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid feedback data.", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    // Placeholder for email service, CRM, or database integration.
    console.info("[feedback]", parsed.data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process feedback." },
      { status: 500 },
    );
  }
}
