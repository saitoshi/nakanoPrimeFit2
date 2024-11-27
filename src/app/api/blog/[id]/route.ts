import mongoose from 'mongoose';
import connectDB from '@/app/utils/connectDB';
import { BlogModel } from '@/app/utils/dataSchemas/blogSchema';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const route = (await params).id;
    console.log(route);
    const blogID = route.split('id=')[1];
    var _id = await new mongoose.Types.ObjectId(blogID);
    let blog = await BlogModel.findById(_id);
    /** 
    console.log(paramID);
    const idParam = paramID.split('id=')[1];
    console.log(idParam);
    var _id = await new mongoose.Types.ObjectId(idParam);
    let blog = await BlogModel.findById(_id);
    */
    return NextResponse.json(
      { message: 'blog list', blog: blog },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'server error' }, { status: 501 });
  }
}
