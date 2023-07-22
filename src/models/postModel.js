import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required."],
        },
        image: {
            type: String,
            required: [true, "Image is required."],
        },
        tag: {
            type: String,
            required: [true, "Tag is required."],
        },
        body: {
            type: String,
            required: [true, "Body is required."],
        },
        author: {
            type: String,
            required: [true, "Author is required."],
        },
        username: {
            type: String,
            required: [true, "Username is required."],
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
