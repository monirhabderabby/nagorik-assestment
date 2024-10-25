// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Read the cookie from the request
  const themeCookie = request.cookies.get("theme");

  // If the cookie is not set, default to dark theme
  if (!themeCookie) {
    // Set the theme cookie with a default value
    const response = NextResponse.next();
    response.cookies.set("theme", "dark", { path: "/" });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
