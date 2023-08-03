import { NextResponse } from "next/server";
import connect from "@/common/db";
import Post from "@/models/postModel";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");
    const tag = searchParams.get("tag");
    const search = searchParams.get("search");

    try {
        await connect();
        if (username) {
            const posts = await Post.find({ username });
            return NextResponse.json(posts);
        } else if (tag) {
            const posts = await Post.find({ tag });
            return NextResponse.json(posts);
        } else if (search) {
            const regex = new RegExp(search, "ig");
            const posts = await Post.find({ title: regex, tag: regex });
            return NextResponse.json(posts);
        } else {
            const posts = await Post.find({});
            return NextResponse.json(posts);
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};

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
