'use client';
import { SimplePost } from '@/model/post';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';

export default function PostList() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<SimplePost[]>({
    queryKey: ['post'],
    queryFn: () => instance.get('/posts'),
  });

  return (
    <ul>{posts && posts.map((post) => <li key={post.id}>{post.text}</li>)}</ul>
  );
}
