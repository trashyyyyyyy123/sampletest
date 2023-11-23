import connectDB from "@/lib/connectDB";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST() {
    connectDB();

    const users = await User.find();
    console.log(users);

    return new NextResponse(JSON.stringify({ success: true, users: users }));
}
