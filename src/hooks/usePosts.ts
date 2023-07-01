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
    mutationFn: ({
      like,
      post,
      username,
    }: {
      like: boolean;
      post: SimplePost;
      username: string;
    }) =>
      fetch('api/likes', {
        method: 'PUT',
        body: JSON.stringify({
          id: post.id,
          like,
        }),
      }),
    onMutate: async ({ like, post, username }) => {
      console.log('Optimistic Updates', username);
      const newPost = {
        ...post,
        likes: like
          ? [...post.likes, username]
          : post.likes.filter((id) => id !== username),
      };

      queryClient.cancelQueries({ queryKey: ['post'] });
      const previousPosts = queryClient.getQueryData(['post']);
      queryClient.setQueryData<SimplePost[]>(['post'], (posts) => {
        return posts?.map((item) => (item.id === post.id ? newPost : item));
      });

      return { previousPosts };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(['post'], context?.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['post'] });
    },
  });

  return { posts, error, isLoading, setLike };
}
