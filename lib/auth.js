import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  providers:[
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await prisma.user.findUnique({
          where: { email: credentials?.email }
        });

        if (!existingUser) {
          return null;
        }
        
        const passwordMatch = await compare(credentials.password, existingUser.password);
  
        if (!passwordMatch) {
          return null;
        }

        return {
          id: existingUser.id,
          username: existingUser.username,
          email: existingUser.email,
          first_name: existingUser.first_name,
          last_name: existingUser.last_name
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // can add other fields from the returned user object from authorize
      if (user) {
        return {
          ...token,
          username: user.username
        }
      }

      return token;
    },
    async session({ session, token }) {
      
      // returns session with username key/value
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username
        }
      }
    }
  }
};