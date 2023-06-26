import NextAuth, { AuthOptions, NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions: NextAuthOptionsAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session }) {
      // Send properties to the client, like an access_token and user id from a provider.
      
      
      return session
    }
  }
  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
