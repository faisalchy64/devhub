import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/common/db";
import User from "@/models/userModel";
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                try {
                    await connect();

                    const user = await User.findOne({
                        email: credentials.email,
                    });

                    if (user) {
                        const compared = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (compared) {
                            const { name, username, email } = user;

                            return { name, username, email };
                        } else {
                            throw new Error("Email or password wrong.");
                        }
                    } else {
                        throw new Error("User not found.");
                    }
                } catch (error) {
                    throw new Error(error.message);
                }
            },
        }),
    ],
    session: {
        maxAge: 60 * 60,
    },
    jwt: {
        maxAge: 60 * 60,
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user.username = token.username;
            return session;
        },
    },
};

const auth = NextAuth(authOptions);

export { auth as GET, auth as POST };
