import { NextResponse } from "next/server";
import connect from "@/common/db";
import User from "@/models/userModel";
import bcrypt from "bcrypt";

export const POST = async (req) => {
    const data = await req.json();
    try {
        await connect();
        const hashed = await bcrypt.hash(data.password, 10);
        const user = await User.create({ ...data, password: hashed });
        return NextResponse.json(
            { message: "user created successfully." },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(error.message, { status: 500 });
    }
};
