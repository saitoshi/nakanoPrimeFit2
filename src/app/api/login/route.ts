import connectDB from '@/app/utils/connectDB';
import { UserModel } from '@/app/utils/dataSchemas/userSchema';
import { NextRequest, NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';
export async function POST(request: NextRequest): Promise<NextResponse> {
  // do something
  try {
    await connectDB();
    const res = await request.json();
    console.log(res);
    const user = await UserModel.findOne({ email: res.email });
    if (!user) {
      return NextResponse.json({ message: 'user not found' }, { status: 404 });
    }
    let isSamePwd = await bcrypt.compare(res.password, user.password);
    if (!isSamePwd) {
      return NextResponse.json(
        { message: 'Password Does Not Match' },
        { status: 405 },
      );
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
