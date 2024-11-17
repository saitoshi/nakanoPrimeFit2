import connectDB from '@/app/utils/connectDB';
import { ServiceModel } from '@/app/utils/dataSchemas/serviceSchemas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    await connectDB();
    var serviceList: any = await ServiceModel.find();

    return NextResponse.json(
      { message: 'Got All The Services', services: serviceList },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'server error' }, { status: 501 });
  }
}
