import mongoose from 'mongoose';
import connectDB from '@/app/utils/connectDB';
import { ServiceModel } from '@/app/utils/dataSchemas/serviceSchemas';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();
    const route = (await params).id;
    console.log(route);
    const serviceID = route.split('id=')[1];
    const _id = await new mongoose.Types.ObjectId(serviceID);
    let service = await ServiceModel.findById(_id);
    return NextResponse.json(
      { message: 'Found Service', service: service },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'server error' }, { status: 501 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();
    let token = request.headers.get('Authorization');

    if (!token) {
      return NextResponse.json(
        { message: 'Error No Token was received', status: 403 },
        { status: 403 },
      );
    }
    token = await token.split(' ')[1];
    const secretKey = process.env.SESSION_SECRET as string;

    let decoded = await jwt.verify(token, secretKey);
    if (!decoded) {
      return NextResponse.json({
        message: 'verification error',
        statu: 403,
      });
    }
    const route = (await params).id;
    console.log(route);
    const serviceID = route.split('id=')[1];
    var _id = await new mongoose.Types.ObjectId(serviceID);

    const serviceInputs = await request.json();
    const today = new Date();
    const blog = await ServiceModel.findByIdAndUpdate(_id, {
      title: serviceInputs.title,
      description: serviceInputs.description,
      thumbnail: serviceInputs.thumbnail,
      images: serviceInputs.images,
      steps: serviceInputs.steps,
      campaign: serviceInputs.campaign,
      benefits: serviceInputs.benefits,
      reviews: serviceInputs.reviews,
      status: serviceInputs.status,
      costs: serviceInputs.costs,
      publishedDate: today,
      lastModified: today,
    });
    return NextResponse.json(
      { message: 'Updated Service', blog: blog },
      { status: 201 },
    );
  } catch (error) {
    await console.error(error);
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}
