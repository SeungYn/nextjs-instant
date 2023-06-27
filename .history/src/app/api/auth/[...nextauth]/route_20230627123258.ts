import { addUser } from '@/service/user';
import NextAuth, { AuthOptions, NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user: { id, name, email, image } }) {
      // signIn이 session보다 먼저 호출 됨
      console.log(id, name, email, image, 'signin callback');
      if (!email) return false;

      addUser({
        id,
        name: name || '',
        image,
        email,
        username: email.split('@')[0],
      });

      return true;
    },
    async session({ session }) {
      // Send properties to the client, like an access_token and user id from a provider.
      console.log(session, 'session callback');
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
        };
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
