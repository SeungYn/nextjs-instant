import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import {
  getUsersAll,
  getUsersByName,
  getUsersByUsername,
} from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response('인증 오류', { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword');
  console.log(keyword);
  if (keyword === null) {
    return getUsersAll().then((data) => NextResponse.json(data));
  }

  let users = await getUsersByName(keyword);
  if (users.length) {
    return NextResponse.json(users);
  }

  users = await getUsersByUsername(keyword);
  return NextResponse.json(users);
}
