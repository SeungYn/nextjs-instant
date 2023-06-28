import { FullPost, SimplePost } from '@/model/post';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import PostUserAvatar from './PostUserAvatar';
import ActionBar from './ActionBar';
import CommentForm from './CommentForm';
import Avatar from './Avatar';

type Props = {
  post: SimplePost;
};
export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = useQuery<FullPost>({
    queryKey: ['post', id],
    queryFn: () => instance.get(`/posts/${id}`),
  });
  const comments = data?.comments;
  return (
    <section className='flex w-full h-full'>
      <div className='relative'>
        {/* 높이는 부모에 따라 달라지도록 지정 */}
        <Image src={image} alt={'photo'} priority fill sizes='650px' />
      </div>

      <div>
        <PostUserAvatar userImage={userImage} username={username} />
        <ul>
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li key={index}>
                  <Avatar
                    image={image}
                    size='small'
                    border={commentUsername === username}
                  />
                  <div>
                    <span>{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <ActionBar likes={likes} username={username} createdAt={createdAt} />
        <CommentForm />
      </div>
    </section>
  );
}
