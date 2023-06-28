import { SimplePost } from '@/model/post';
import Avatar from './Avatar';
import Image from 'next/image';
import { BookMarkIcon, HeartIconIcon, SmileIcon } from './icons';
import { parseDate } from '@/util/date';

type Props = {
  post: SimplePost;
};
export default function PostListCard({ post }: Props) {
  const { username, userImage, image, createdAt, likes, text } = post;
  return (
    <article className='rounded-lg shadow-md border border-gray-200'>
      <div className='flex items-center p-2'>
        <Avatar border image={userImage} size='medium' />
        <span className='text-gray-900 font-bold ml-2'>{username}</span>
      </div>
      <Image
        className='w-full object-cover aspect-square'
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
      />
      <div className='flex justify-between my-2 px-4'>
        <HeartIconIcon />
        <BookMarkIcon />
      </div>
      <div className='px-4 py-1'>
        <p className='text-sm font-bold mb-2'>
          {`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}{' '}
        </p>
        <p>
          <span className='font-bold mr-1'>{username}</span>
          {text}
        </p>

        <p className='text-xs text-neutral-500 uppercase my-2'>
          {parseDate(createdAt)}
        </p>
        <form className='flex it border-t border-neutral-300 '>
          <SmileIcon />
          <input
            className='w-full ml-2 border-none outline-none p-3'
            type='text'
            placeholder='add text'
          />
          <button>post</button>
        </form>
      </div>
    </article>
  );
}
