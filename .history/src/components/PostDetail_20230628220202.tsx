import { FullPost, SimplePost } from '@/model/post';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import PostUserAvatar from './PostUserAvatar';
import ActionBar from './ActionBar';

type Props = {
  post: SimplePost;
};
export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = useQuery<FullPost>({
    queryKey: ['post', id],
    queryFn: () => instance.get(`/posts/${id}`),
  });

  return (
    <section>
      <div className='relative'>
        {/* 높이는 부모에 따라 달라지도록 지정 */}
        <Image src={image} alt={'photo'} priority fill sizes='650px' />
      </div>
      <div>
        <PostUserAvatar userImage={userImage} username={username} />
        <ActionBar likes={likes} username={username} createdAt={createdAt} />
      </div>
    </section>
  );
}
