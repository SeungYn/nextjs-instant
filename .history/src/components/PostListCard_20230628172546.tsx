import { SimplePost } from '@/model/post';
import Avatar from './Avatar';
import Image from 'next/image';
import { BookMarkIcon, HeartIconIcon, SmileIcon } from './icons';
import { parseDate } from '@/util/date';
import CommentForm from './CommentForm';

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

      <CommentForm />
    </article>
  );
}
