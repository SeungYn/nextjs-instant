import { SimplePost } from '@/model/post';
import Avatar from './Avatar';

type Props = {
  post: SimplePost;
};
export default function PostListCard({ post }: Props) {
  const { username, userImage, image, createdAt, likes, text } = post;
  return (
    <>
      <div>
        <Avatar border image={userImage} size='big' />
        <span></span>
      </div>
    </>
  );
}
