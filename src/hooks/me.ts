import { SimplePost } from '@/model/post';
import { HomeUser } from '@/model/user';
import { instance } from '@/service/http';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

async function updateBookmark(poadId: string, bookmark: boolean) {
  return fetch('api/bookmarks', {
    method: 'PUT',
    body: JSON.stringify({
      id: poadId,
      bookmark,
    }),
  });
}

export default function useMe() {
  const queryClient = useQueryClient();
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<HomeUser>({
    queryKey: ['me'],
    queryFn: () => instance.get('/me'),
  });

  const { mutate: setBookmarked } = useMutation({
    mutationFn: ({
      postId,
      bookmark,
    }: {
      postId: string;
      bookmark: boolean;
    }) => {
      return updateBookmark(postId, bookmark);
    },
    onMutate: async ({ postId, bookmark }) => {
      if (!user) return;
      const bookmarks = user?.bookmarks ?? [];
      const newUser = {
        ...user,
        bookmarks: bookmark
          ? [...bookmarks, postId]
          : bookmarks.filter((b) => b !== postId),
      };
      queryClient.cancelQueries({ queryKey: ['me'] });
      const previousUser = queryClient.getQueryData(['me']);
      queryClient.setQueryData<HomeUser>(['me'], () => newUser);

      return { previousUser };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(['me'], context?.previousUser);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] });
    },
  });

  return { user, error, isLoading, setBookmarked };
}
