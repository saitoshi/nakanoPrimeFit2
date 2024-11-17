import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(req: NextRequest) {
  try {
    console.log(req.headers.get('Authorization'));
    if (req.nextUrl.pathname.match('/api/post-blog')) {
      const authroizationHeader = req.headers.get('Authorization');
      // console.log('token: ' + authroizationHeader);
      if (!authroizationHeader) {
        return NextResponse.json({ message: 'Please Log In' }, { status: 403 });
      }

      let token = authroizationHeader;

      if (!token) {
        return NextResponse.json({ message: 'Please Log In' }, { status: 403 });
      }

      return NextResponse.next();
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Verification Error' },
      { status: 403 },
    );
  }
}

export const config = {
  matcher: ['/api/post-blog', '/api/user'],
};
