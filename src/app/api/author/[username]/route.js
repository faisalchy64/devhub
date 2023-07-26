import { NextResponse } from "next/server";
import connect from "@/common/db";
import Post from "@/models/postModel";
import User from "@/models/userModel";

export const GET = async (req, { params }) => {
    try {
        await connect();
        const author = await User.findOne({ username: params.username }).select(
            ["name", "username", "about", "followers"]
        );

        if (author) {
            const posts = await Post.find({ username: author.username });
            return NextResponse.json({ author, posts });
        }

        return NextResponse.json(
            { message: "Author not found." },
            { status: 404 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
