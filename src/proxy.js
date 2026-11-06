import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'


export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/signin" || pathname === "/signup") {
    return NextResponse.next();
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    // return signInUrl = new URL("/signin", request.url);
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/:slug"],
};