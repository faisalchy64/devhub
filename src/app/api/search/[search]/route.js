import { NextResponse } from "next/server";
import connect from "@/common/db";
import Post from "@/models/postModel";

export const GET = async (req, { params }) => {
    try {
        const regex = new RegExp(params.search, "i");
        await connect();
        const posts = await Post.find({ title: regex, tag: regex });
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
