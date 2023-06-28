'use client';
import { SimplePost } from '@/model/post';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';

import PostListCard from './PostListCard';
import GridSpinner from './icons/GridSpinner';

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
        <div className='text-center my-32'>
          <GridSpinne />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className='mb-3'>
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
