import { DASHBOARD } from '@/config/pages.config';
import { ENUM_AUTH_TOKEN_TYPE } from '@/services/auth-token';
import { NextResponse, NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { url, cookies } = request;
  const refreshToken = cookies.get(ENUM_AUTH_TOKEN_TYPE.REFRESH_TOKEN)?.value;

  const isAuthPage = url.includes('/auth');

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD.HOME, url));
  }
  if (isAuthPage) {
    return NextResponse.next();
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL('/auth', url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/i/:path*', '/auth/:path*'],
};
