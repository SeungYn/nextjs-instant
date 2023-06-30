import { getPostsOf } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: {
    slug: string[];
  };
};
export async function GET(_: NextRequest, context: Context) {
  const { slug } = context.params;
  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse('Bad Request', { status: 400 });
  }

  const [username, query] = slug;
  let posts;

  switch (query) {
    case 'posts':
      posts = await getPostsOf(username);
      break;
    case 'like':
      posts = await getPostsOf(username);
      break;
    case 'save':
      posts = await getPostsOf(username);
      break;
  }
  return NextResponse.json(posts);
}
