import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { getUsersByName, getUsersByUsername } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response('인증 오류', { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  console.log(searchParams);

  // let users = await getUsersByName(name);
  // if (users.length) {
  //   return NextResponse.json(users);
  // }

  // users = await getUsersByUsername(name);
  // return NextResponse.json(users);
}
