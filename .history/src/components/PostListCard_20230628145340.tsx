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
    <article className='rounded-lg shadow-md'>
      <div>
        <Avatar border image={userImage} size='big' />
        <span>{username}</span>
      </div>
      <Image
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
      />
      <div>
        <HeartIconIcon />
        <BookMarkIcon />
      </div>
      <div>
        <p>
          {`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}{' '}
          <p>
            <span>{username}</span>
            {text}
          </p>
        </p>
        <p>{parseDate(createdAt)}</p>
        <form>
          <SmileIcon />
          <input type='text' placeholder='add text' />
          <button>post</button>
        </form>
      </div>
    </>
  );
}
