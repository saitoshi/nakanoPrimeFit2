import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
  console.log(req.headers.get('Authorization'));
  if (req.nextUrl.pathname.match('/api/post-blog')) {
    const authroizationHeader = req.headers.get('Authorization');
    if (!authroizationHeader) {
      return NextResponse.json({ message: 'Please Log In' }, { status: 403 });
    }
    //const token = req.headers.authorization.split('')[1];
    const token = authroizationHeader?.split('')[1];
    if (!token) {
      return NextResponse.json({ message: 'Please Log In' }, { status: 403 });
    }
    const secretKey = new TextEncoder().encode(process.env.SESSION_SECRET!);
    const options = {
      algorithms: ['HS256'],
    };
    let decoded = await jwtVerify(token, secretKey, options);
    console.log(decoded);
    if (!decoded) {
      return NextResponse.redirect(new URL('/login'));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/post-blog',
};
