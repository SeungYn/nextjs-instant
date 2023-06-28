import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { getFollowingPostsOf } from '@/service/posts';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response('인증 오류', { status: 401 });
  }
  return getFollowingPostsOf(user.username).then((data) => {
    console.log('post data', data);
    return NextResponse.json(data);
  });
}
