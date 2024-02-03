import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// *  Middleware for this task is that the protected routes will not even start rendering until the
// *  Middleware verifies the authentication

// * Initializing NextAuth.js with the authConfig object and exporting the auth property
export default NextAuth(authConfig).auth;

// * matcher option from Middleware to specify that it should run on specific paths.
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
