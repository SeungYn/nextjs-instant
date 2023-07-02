import { Comment, FullPost, SimplePost } from '@/model/post';
import { instance } from '@/service/http';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function usePost(postId: string) {
  const queryClient = useQueryClient();
  const {
    data: post,
    error,
    isLoading,
  } = useQuery<FullPost>({
    queryKey: ['post', postId],
    queryFn: () => instance.get(`/posts/${postId}`),
  });

  const { mutate: postComment } = useMutation({
    mutationFn: ({ comment }: { comment: Comment }) => {
      return instance.post('/comments', {
        comment,
        id: postId,
      });
    },
    onMutate: async ({ comment }: { comment: Comment }) => {
      if (!post) return;
      const newPost = {
        ...post,
        comments: [...post.comments, comment],
      };
      await queryClient.cancelQueries({ queryKey: ['post', postId] });

      queryClient.setQueryData<FullPost>(['post', postId], newPost);

      return { previousPost: post };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(['post'], context?.previousPost);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['post', postId] });
    },
  });

  return { post, error, isLoading, postComment };
}
