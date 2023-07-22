import { NextResponse } from "next/server";
import connect from "@/common/db";
import User from "@/models/userModel";
import bcrypt from "bcrypt";

export const POST = async (req) => {
    try {
        const data = await req.json();
        await connect();
        const hashed = await bcrypt.hash(data.password, 10);
        const user = await User.create({ ...data, password: hashed });
        return NextResponse.json(
            { message: "User created successfully." },
            { status: 201 }
        );
    } catch (error) {
        if (error.message.includes("duplicate")) {
            return NextResponse.json(
                { error: "Username and email should be unique." },
                { status: 500 }
            );
        } else {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
};
