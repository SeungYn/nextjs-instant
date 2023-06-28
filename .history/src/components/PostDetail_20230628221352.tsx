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
      <div className='relative basis-3/5'>
        {/* 높이는 부모에 따라 달라지도록 지정 */}
        <Image
          src={image}
          alt={'photo'}
          priority
          fill
          sizes='650px'
          className='object-cover'
        />
      </div>

      <div className='w-full basis-2/5 flex flex-col '>
        <PostUserAvatar userImage={userImage} username={username} />
        <ul className='border-t border-gray-200 h-full overflow-y-auto p-4 mb-1'>
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li key={index} className='flex items-center mb-1'>
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
