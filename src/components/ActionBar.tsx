import { parseDate } from '@/util/date';
import { BookMarkIcon } from './icons';
import { useState } from 'react';
import ToggleButton from './common/ToggleButton';
import HeartFillIcon from './icons/HeartFillIcon';
import HeartIcon from './icons/HeartIcon';
import BookmarkFillIcon from './icons/BookmarkFillIcon';
import { SimplePost } from '@/model/post';
import { useSession } from 'next-auth/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import usePosts from '@/hooks/usePosts';
import useMe from '@/hooks/me';

type Props = {
  post: SimplePost;
};
export default function ActionBar({ post }: Props) {
  const { id, likes, username, text, createdAt } = post;
  const { user, setBookmarked } = useMe();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;
  const handleLike = (like: boolean) => {
    user && setLike({ like, post, username: user.username });
  };
  const handleBookmark = (bookmark: boolean) => {
    user && setBookmarked({ postId: id, bookmark });
  };

  return (
    <>
      <div className='flex justify-between my-2 px-4'>
        <ToggleButton
          toggled={liked}
          onToggle={handleLike}
          onIcon={<HeartFillIcon />}
          offIcon={<HeartIcon />}
        />
        <ToggleButton
          toggled={bookmarked}
          onToggle={handleBookmark}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookMarkIcon />}
        />
      </div>
      <div className='px-4 py-1'>
        <p className='text-sm font-bold mb-2'>
          {`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}{' '}
        </p>
        {text && (
          <p>
            <span className='font-bold mr-1'>{username}</span>
            {text}
          </p>
        )}

        <p className='text-xs text-neutral-500 uppercase my-2'>
          {parseDate(createdAt)}
        </p>
      </div>
    </>
  );
}
