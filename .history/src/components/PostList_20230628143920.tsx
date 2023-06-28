'use client';
import { SimplePost } from '@/model/post';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import { GridLoader } from 'react-spinners';

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
    <section>
      {isLoading && (
        <div>
          <GridLoader color='red' />
        </div>
      )}
    </section>
  );
}
