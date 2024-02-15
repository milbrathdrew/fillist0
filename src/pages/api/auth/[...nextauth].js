//https://www.youtube.com/watch?v=A5ZN--P9vXM
//API route responsible for handling authentication.
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    secret: process.env.JWT_SECRET
});