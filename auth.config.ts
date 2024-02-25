import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "@/schemas";

export default {
  providers: [
    Credentials({
      credentials: {
        loginId: { label: "ID" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // const validatedFields = LoginSchema.safeParse(credentials);
        //
        // if (validatedFields.success) {
        //   const { ok, data: user } = await authService.login(validatedFields.data);
        //   if (ok) {
        //     return user;
        //   }
        // }

        // TODO test
        if (credentials?.loginId === "test") {
          return {
            loginId: "test",
            name: "tester",
          };
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
