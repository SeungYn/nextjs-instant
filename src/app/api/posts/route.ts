import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { createPost, getFollowingPostsOf } from '@/service/posts';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response('인증 오류', { status: 401 });
  }
  return getFollowingPostsOf(user.username).then((data) => {
    return NextResponse.json(data);
  });
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    return new Response('인증 오류', { status: 401 });
  }

  const data = await request.formData();
  const text = data.get('text')?.toString();
  const file = data.get('file') as Blob;

  if (!text || !file) {
    return new Response('Bad Request', { status: 400 });
  }
  console.log(data, text, file, 'route handler');
  return createPost(user.id, text, file).then((data) =>
    NextResponse.json(data)
  );
}
