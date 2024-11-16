import connectDB from '@/app/utils/connectDB';
import { BlogModel } from '@/app/utils/dataSchemas/blogSchema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    await connectDB();
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
