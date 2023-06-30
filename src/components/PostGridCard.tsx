'use client';
import Image from 'next/image';
import { useState } from 'react';
import { SimplePost } from '@/model/post';
import ModalPortal from './common/ModalPortal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

type Props = {
  post: SimplePost;
  priority?: boolean;
};
export default function PostGridCard({ post, priority = false }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const { image, username } = post;
  const { data: session } = useSession();

  const handleOpenPost = () => {
    if (!session?.user) {
      return signIn();
    }
    setOpenModal(true);
  };

  return (
    <div className='relative w-full aspect-square'>
      <Image
        src={image}
        className='object-cover'
        alt={`image by ${username}}`}
        fill
        sizes='650px'
        priority={priority}
        onClick={handleOpenPost}
      />
      {openModal && (
        <ModalPortal>
          <PostModal
            onClose={() => {
              setOpenModal(false);
            }}
          >
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
}
