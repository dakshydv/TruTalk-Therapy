import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  if (process.env.NEXT_PUBLIC_ENV === 'staging') {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return res;
}
