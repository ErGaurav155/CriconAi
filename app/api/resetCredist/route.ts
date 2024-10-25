import { NextResponse } from "next/server";
import { resetCredits } from "@/lib/actions/user.actions";

export async function POST(req: Request) {
  // Check the authorization header
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    // Run the resetCredits function if authorization is successful
    const result = await resetCredits();
    return NextResponse.json(
      { message: "Credits reset successfully", result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to reset credits:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
