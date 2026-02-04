import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware executed for:", request.nextUrl.pathname);
  if (
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname === "/home"
  ) {
    return NextResponse.redirect(new URL("/movies", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home", "/movies/:path*", "/series/:path*"],
};
