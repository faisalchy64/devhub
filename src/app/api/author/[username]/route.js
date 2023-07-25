import { NextResponse } from "next/server";
import connect from "@/common/db";
import Post from "@/models/postModel";

export const GET = async (req, { params }) => {
    try {
        await connect();
        const posts = await Post.find({ username: params.username });
        if (posts) {
            return NextResponse.json(posts);
        }

        return NextResponse.json(
            { message: "Post not found." },
            { status: 404 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
