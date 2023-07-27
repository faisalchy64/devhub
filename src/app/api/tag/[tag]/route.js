import { NextResponse } from "next/server";
import connect from "@/common/db";
import Post from "@/models/postModel";

export const GET = async (req, { params }) => {
    try {
        await connect();
        const posts = await Post.find({ tag: params.tag });
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
