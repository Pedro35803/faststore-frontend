import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCookieAuth } from "./services/cookiesServer";

export function middleware(request: NextRequest) {
  if (!getCookieAuth())
    return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/account", "/dashboard", "/cart", "/favorites", "/history"],
};
