import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import { removeTokenFromCookie } from "./utils/token";

const AuthRoutes = ["/login"];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Access cookies using the cookies object from the request
  const cookies = request.cookies;
  const accessToken = cookies.get("devAccessToken")?.value;

  // Allow public routes like login and register
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      // Remove token if not authenticated
      removeTokenFromCookie();
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  try {
    // Decode the token to check user role or expiration
    const decodedData = jwtDecode(accessToken);
    const role = decodedData?.role;

    // Redirect to dashboard if the user is authenticated and visits the landing page
    if (accessToken) {
      if (
        (role === "admin" || role === "super_admin") &&
        pathname.startsWith("/dashboard")
      ) {
        return NextResponse.next();
      }
      if (pathname === "/login") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    }

    // Allow access to private routes only for ADMIN or SUPER_ADMIN
  } catch (error) {
    console.error("Error decoding token:", error);
  }

  // Redirect to home for unauthorized or invalid token
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
