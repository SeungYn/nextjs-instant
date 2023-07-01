import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { disLikePost, likePost } from '@/service/posts';

export async function PUT(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  const { id, like } = await request.json();
  if (!id || like === undefined) {
    return new Response('Bad Request', { status: 400 });
  }

  const reqFn = like ? likePost : disLikePost;

  return reqFn(id, user.id)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
