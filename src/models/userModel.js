import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    username: {
        type: String,
        unique: [true, "Username should be unique."],
        required: [true, "Username is required."],
    },
    email: {
        type: String,
        unique: [true, "Email should be unique."],
        required: [true, "Email is required."],
    },
    password: {
        type: String,
        required: [true, "Email is required."],
    },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
