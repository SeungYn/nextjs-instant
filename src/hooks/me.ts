import { SimplePost } from '@/model/post';
import { AuthUser, HomeUser } from '@/model/user';
import { instance } from '@/service/http';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

async function updateBookmark(poadId: string, bookmark: boolean) {
  return fetch('api/bookmarks', {
    method: 'PUT',
    body: JSON.stringify({
      id: poadId,
      bookmark,
    }),
  });
}

async function updateFollow(targetId: string, follow: boolean) {
  return instance.put('/follow', {
    id: targetId,
    follow,
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

  const { mutate: toggleFollow, mutateAsync: toggleFollowAsync } = useMutation({
    mutationFn: ({
      targetUser,
      follow,
    }: {
      targetUser: AuthUser;
      follow: boolean;
    }) => updateFollow(targetUser.id, follow),
    onSuccess: () => {
      console.log('follow Seccess');
      queryClient.invalidateQueries({ queryKey: ['me'] });
    },
  });
  return {
    user,
    error,
    isLoading,
    setBookmarked,
    toggleFollow,
    toggleFollowAsync,
  };
}
