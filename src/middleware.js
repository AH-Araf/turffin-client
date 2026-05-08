import { NextResponse } from "next/server";
import { TURFFIN_SESSION_GATE_COOKIE } from "@/lib/web-session-constants";

export function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const gate = request.cookies.get(TURFFIN_SESSION_GATE_COOKIE)?.value;

  if (!gate) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    loginUrl.search = "";
    loginUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/turf-details/:id/slot-availability"]
};
