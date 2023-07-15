import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {},
        }),
    ],
    session: {
        maxAge: 60 * 60,
    },
    jwt: {
        maxAge: 60 * 60,
    },
};

const auth = NextAuth(authOptions);

export { auth as GET, auth as POST };
