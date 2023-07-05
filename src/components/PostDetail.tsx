import { FullPost, SimplePost } from '@/model/post';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import PostUserAvatar from './PostUserAvatar';
import ActionBar from './ActionBar';
import CommentForm from './CommentForm';
import Avatar from './Avatar';
import usePosts from '@/hooks/usePosts';
import usePost from '@/hooks/usePost';
import useMe from '@/hooks/me';

type Props = {
  post: SimplePost;
};
export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, text, createdAt, likes } = post;
  const { post: data, postComment } = usePost(post.id);
  const { user } = useMe();
  const comments = data?.comments;
  console.log(comments);
  const handlePostComment = (comment: string) => {
    user &&
      postComment({
        comment: { comment, image: user.image, username: user.username },
      });
  };
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
              ({ image, username: commentUsername, comment: text }, index) => (
                <li key={index} className='flex items-center mb-1'>
                  <Avatar
                    image={image}
                    size='small'
                    border={commentUsername === username}
                  />
                  <div className='ml-2'>
                    <span className='font-bold mr-1'>{commentUsername}</span>
                    <span>{text}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <ActionBar post={post}>
          {text && (
            <p>
              <span className='font-bold mr-1'>{username}</span>
              {text}
            </p>
          )}
        </ActionBar>
        <CommentForm handlePostComment={handlePostComment} />
      </div>
    </section>
  );
}
