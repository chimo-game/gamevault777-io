import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("Register attempt:", body);

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Simulate OTP sent
        if (body.step === 2) {
            return NextResponse.json({ success: true, message: "OTP sent" });
        }

        return NextResponse.json({
            success: true,
            token: "mock-jwt-token-new-user",
            user: {
                id: new Date().getTime(),
                email: body.email,
                name: body.firstName + " " + body.lastName,
                role: "user",
                locker_completed_at: null
            }
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Invalid request" },
            { status: 400 }
        );
    }
}
