import { SimplePost } from '@/model/post';
import { instance } from '@/service/http';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function usePosts() {
  const queryClient = useQueryClient();
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<SimplePost[]>({
    queryKey: ['post'],
    queryFn: () => instance.get('/posts'),
  });

  const { mutate: setLike } = useMutation({
    mutationFn: ({ like, post }: { like: boolean; post: SimplePost }) =>
      fetch('api/likes', {
        method: 'PUT',
        body: JSON.stringify({
          id: post.id,
          like,
        }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['post'],
      });
    },
  });

  return { posts, error, isLoading, setLike };
}
