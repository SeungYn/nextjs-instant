import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { getFollowingPostsOf, getPost } from '@/service/posts';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

type Context = {
  params: { id: string };
};

export async function GET(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(context);
  if (!user) {
    return new Response('인증 오류', { status: 401 });
  }
  return getPost(context.params.id).then((data) => {
    return NextResponse.json(data);
  });
}
