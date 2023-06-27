import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response('인증 오류', { status: 401 });
  }
  return NextResponse.json('htllo');
}
