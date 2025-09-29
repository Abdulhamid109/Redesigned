import { redis } from "@/redis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const form = await request.formData();
        const file = form.get("File") as File;

        if (!file) {
            return NextResponse.json({ error: "No file" }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        await redis.set("1",buffer.toString("base64"),{ex:600});

        

        return NextResponse.json({ success: true ,message:"Data successfully uploaded.."})
    } catch (error) {
        console.log("Internal Server error" + error);
        return NextResponse.json(
            { error: "Internal Server error" + error },
            { status: 500 }
        )
    }
}