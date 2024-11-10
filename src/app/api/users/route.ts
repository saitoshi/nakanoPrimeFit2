import connectDB from '@/app/utils/connectDB';
import { UserModel } from '@/app/utils/dataSchemas/userSchema';
import { NextRequest, NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';
export async function GET(request: any): Promise<NextResponse> {
  // do something
  try {
    await connectDB();
    const userList = await UserModel.find();

    console.log(userList);
    return NextResponse.json(userList, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    await connectDB();
    const res = await request.json();
    let userExits = await UserModel.findOne({ email: res.email });
    if (userExits) {
      return NextResponse.json({ error: 'User Exists' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPwd = await bcrypt.hash(res.password, salt);
    await UserModel.create({
      email: res.email,
      password: hashedPwd,
    });
    return NextResponse.json({ message: 'User Created' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
