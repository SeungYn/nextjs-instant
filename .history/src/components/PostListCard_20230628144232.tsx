import { SimplePost } from '@/model/post';
import Avatar from './Avatar';
import Image from 'next/image';

type Props = {
  post: SimplePost;
};
export default function PostListCard({ post }: Props) {
  const { username, userImage, image, createdAt, likes, text } = post;
  return (
    <>
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
    </>
  );
}
