import { redis } from "@/redis";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const imagData = await redis.get("1");

        return NextResponse.json(
            {success:true,data:imagData},
            {status:200}
        )
    } catch (error) {
        console.log("Internal Server error" + error);
                return NextResponse.json(
                    { error: "Internal Server error" + error },
                    { status: 500 }
                )
    }
}