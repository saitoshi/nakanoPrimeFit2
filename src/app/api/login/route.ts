import connectDB from '@/app/utils/connectDB';
import { UserModel } from '@/app/utils/dataSchemas/userSchema';
import { NextRequest, NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export async function POST(request: NextRequest): Promise<NextResponse> {
  // do something
  try {
    await connectDB();
    let reqBody = await request.json();
    let { email, password } = reqBody;
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return NextResponse.json({ message: 'user not found' }, { status: 404 });
    }
    let isSamePwd = await bcrypt.compare(password, user.password);
    if (!isSamePwd) {
      return NextResponse.json(
        { status: '405', message: 'Password Does Not Match' },
        { status: 405 },
      );
    }

    const secretKey = process.env.SESSION_SECRET as string;
    const token = jwt.sign({ user }, secretKey, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return NextResponse.json(
      { status: 200, email: email, token: token },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}
