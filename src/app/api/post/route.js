import { NextResponse } from "next/server";
import connect from "@/common/db";
import Post from "@/models/postModel";

export const POST = async (req) => {
    try {
        const data = await req.json();
        await connect();
        const post = await Post.create(data);
        return NextResponse.json(
            { message: "Post created successfully." },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};