'use client';
import { SimplePost } from '@/model/post';
import Avatar from './Avatar';
import Image from 'next/image';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import { useState } from 'react';
import ModalPortal from './common/ModalPortal';

type Props = {
  post: SimplePost;
  priority?: boolean;
};
export default function PostListCard({ post, priority = false }: Props) {
  const { username, userImage, image, createdAt, likes, text } = post;
  const [openModal, setOpenModal] = useState(false);
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
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <p>안녕하세요</p>
        </ModalPortal>
      )}
    </article>
  );
}
