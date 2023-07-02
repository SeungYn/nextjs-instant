'use client';
import { FormEvent, useState } from 'react';
import { SmileIcon } from './icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from '@/service/http';

type Props = {
  handlePostComment: (comment: string) => void;
};

export default function CommentForm({ handlePostComment }: Props) {
  const [comment, setComment] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handlePostComment(comment);
    setComment('');
  };
  return (
    <form
      className='flex items-center border-t border-neutral-300 px-3'
      onSubmit={onSubmit}
    >
      <SmileIcon />
      <input
        className='w-full ml-2 border-none outline-none p-3'
        type='text'
        placeholder='add text'
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <button
        className='font-bold text-sky-500 ml-2 cursor-pointer'
        disabled={comment === '' ? true : false}
      >
        post
      </button>
    </form>
  );
}
