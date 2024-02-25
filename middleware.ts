import NextAuth from "next-auth";
import authConfig from "@/auth.config";

const LOG_IN_URL = "/login";

const publicRoutes = [LOG_IN_URL, "/registration"];

const API_AUTH_PREFIX = "/api/auth";

const DEFAULT_LOGGED_IN_REDIRECT = "/";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(API_AUTH_PREFIX);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isLoggedIn && isPublicRoute) {
    return Response.redirect(new URL(DEFAULT_LOGGED_IN_REDIRECT, nextUrl));
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(new URL(`${LOG_IN_URL}?callbackUrl=${encodedCallbackUrl}`, nextUrl));
  }

  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
