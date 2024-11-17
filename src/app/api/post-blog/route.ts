import connectDB from '@/app/utils/connectDB';
import { BlogModel } from '@/app/utils/dataSchemas/blogSchema';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    await connectDB();
    let token = request.headers.get('Authorization');
    if (!token) {
      return NextResponse.json(
        { message: 'Error No Token was received', status: 403 },
        { status: 201 },
      );
    }
    const secretKey = process.env.SESSION_SECRET as string;

    let decoded = await jwt.verify(token, secretKey);

    if (!decoded) {
      return NextResponse.json({ message: 'verification error', statu: 403 });
    }
    let reqBody = await request.json();
    let {
      title,
      thumbnail,
      content,
      categories,
      publishedDate,
      contentImg,
      status,
    } = reqBody;
    let today = new Date().getUTCDate();
    const blog = await BlogModel.create({
      title,
      thumbnail,
      content,
      categories,
      publishedDate,
      lastModified: today,
      status,
      contentImg,
    });
    return NextResponse.json(
      { message: 'Created Blog', blog: blog },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}
