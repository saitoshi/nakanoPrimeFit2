import connectDB from '@/app/utils/connectDB';
import { UserModel } from '@/app/utils/dataSchemas/userSchema';
import { NextRequest, NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';
import { SignJWT } from 'jose';
export async function POST(request: NextRequest): Promise<NextResponse> {
  // do something
  try {
    await connectDB();
    let reqBody = await request.json();
    console.log(reqBody);
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
    const secretKey = new TextEncoder().encode(process.env.SESSION_SECRET!);
    const token = await new SignJWT({
      email: user.email,
      role: user.role,
    })
      .setProtectedHeader({
        alg: 'HS256',
      })
      .setExpirationTime('2h') //有効期限 2hは2時間　1dは1日
      .sign(secretKey);
    return NextResponse.json(
      { status: 200, email: email, token: token },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}
