import connectDB from '@/app/utils/connectDB';
import { UserModel } from '@/app/utils/dataSchemas/userSchema';
import { NextRequest, NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export async function GET(request: any): Promise<NextResponse> {
  // do something
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
    const userList = await UserModel.find();
    return NextResponse.json(
      { userList: userList, status: 201 },
      { status: 200 },
    );
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
      return NextResponse.json(
        { status: 400, message: 'User Exists' },
        { status: 400 },
      );
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPwd = await bcrypt.hash(res.password, salt);
    await UserModel.create({
      email: res.email,
      password: hashedPwd,
    });
    return NextResponse.json(
      { status: 201, message: 'User Created' },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
