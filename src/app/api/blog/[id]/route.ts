import mongoose from 'mongoose';
import connectDB from '@/app/utils/connectDB';
import { BlogModel } from '@/app/utils/dataSchemas/blogSchema';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse> {
  try {
    const paramID = (await params).id;
    const idParam = paramID.split('id=')[1];
    console.log(idParam);
    var _id = await new mongoose.Types.ObjectId(idParam);
    let blog = await BlogModel.findById(_id);
    return NextResponse.json(
      { message: 'blog list', blogs: blog },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'server error' }, { status: 501 });
  }
}
