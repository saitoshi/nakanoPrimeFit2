import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const publicPath = ['/get-service'];
  const privateRoutes = ['/api/login', '/api/get-service'];
}
