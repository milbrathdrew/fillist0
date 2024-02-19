import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,

  // Add the secret for JWT encryption
  secret: process.env.JWT_SECRET,

  // Enable debug messages in the console if you're having problems
  debug: process.env.NODE_ENV === 'development',

  // Callbacks for JWT and session handling
  callbacks: {
    // This callback is called when a JWT token is created or updated
    async jwt({ token, account }) {
      // If account is not null, it means that the user has just logged in or the token is being refreshed
      // In this case, we want to persist the OAuth access_token and refresh_token to the token
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    // This callback is called whenever a session is checked
    async session({ session, token }) {
      // We are sending properties to the client, like an access_token from a provider
      // The session object is what gets returned to the client
      // We add the accessToken and refreshToken to the session object here
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
});