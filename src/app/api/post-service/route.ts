import connectDB from '@/app/utils/connectDB';
import { ServiceModel } from '@/app/utils/dataSchemas/serviceSchemas';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    await connectDB();
    let reqBody = await request.json();
    let {
      title,
      thumbnail,
      description,
      benefits,
      customerComments,
      appointmentSteps,
      costs,
      status,
      additionalImage,
    } = reqBody;
    let today = new Date().getUTCDate();
    let lastModified = new Date().getUTCDate();
    const service = await ServiceModel.create({
      title,
      thumbnail,
      description,
      benefits,
      customerComments,
      appointmentSteps,
      costs,
      status,
      publishedDate: today,
      lastModified: lastModified,
      additionalImage,
    });
    return NextResponse.json(
      { message: 'Created Service', service: service },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}
