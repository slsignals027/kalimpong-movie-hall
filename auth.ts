import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({


  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      name: "credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) {
          return null;
        }

        // Temporary plain-text password check
        if (user.password !== credentials.password) {
          return null;
        }

        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id;
      token.role = (user as any).role;
    }

    return token;
  },

  async session({ session, token }) {
    if (session.user) {
      (session.user as any).id = token.id;
      (session.user as any).role = token.role;
    }

    return session;
  },
},
});