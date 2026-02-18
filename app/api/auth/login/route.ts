import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("Login attempt:", body);

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json({
            success: true,
            token: "mock-jwt-token-12345",
            user: {
                id: 1,
                email: body.email,
                name: "Test User",
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
