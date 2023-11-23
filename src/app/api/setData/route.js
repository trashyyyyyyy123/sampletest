import connectDB from "@/lib/connectDB";
import User from "@/models/user";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
    connectDB();

    const { name, regNo, age } = await request.json();
    console.log(name, regNo, age);

    const user = await User({
        name: name,
        regNo: regNo,
        age: age,
    });
    console.log(user);

    try {
        await user.save();
    } catch (e) {
        console.log(e);
    }

    return new NextResponse(JSON.stringify({ success: true }), {
        status: 200,
    });
}
