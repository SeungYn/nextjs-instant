'use client';

import { AuthUser } from '@/model/user';
import Avatar from './Avatar';
import PostUserAvatar from './PostUserAvatar';
import FilesIcon from './icons';
import {
  ChangeEvent,
  DragEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import Button from './common/Button';
import Image from 'next/image';
import { instance } from '@/service/http';
import { redirect, useRouter } from 'next/navigation';

type Props = {
  user: AuthUser;
};

export default function NewPost({ user: { username, image } }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    console.log(files);
    if (name === 'img') {
      if (files) setFile(files[0]);
    }
  };

  const dragover = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const dragDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    console.log(e.dataTransfer.files);
    const file = e.dataTransfer.files[0];
    setIsDragging(false);
    setFile(file);
  };

  const drag = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    if (e.type === 'dragenter') {
      e.stopPropagation();
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      e.stopPropagation();
      setIsDragging(false);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (!file) return;

    formData.append('file', file);
    formData.append('text', textRef.current?.value ?? '');

    fetch('/api/posts', { method: 'POST', body: formData });
    // instance
    //   .post('/posts', formData, {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //   })
    //   .then((res) => {
    //     router.push('/');
    //   })
    //   .catch((e) => {
    //     console.log('error', e);
    //   });
  };

  return (
    <section className='w-full max-w-xl flex flex-col items-center '>
      <PostUserAvatar userImage={image ?? ''} username={username} />
      <form className='w-full flex flex-col' onSubmit={onSubmit}>
        <input
          // className='hidden'
          type='file'
          accept='image/*'
          id='input-upload'
          name='img'
          onChange={onChange}
        />
        <label
          className={`relative flex flex-col items-center justify-center w-full h-60 border-2 border-sky-400 border-dashed ${
            isDragging ? 'bg-pink-300/50' : 'bg-none'
          }`}
          htmlFor='input-upload'
          onDragOver={dragover}
          onDragEnter={drag}
          onDragLeave={drag}
          onDrop={dragDrop}
        >
          {isDragging && (
            <div className='absolute inset-0 z-10 bg-sky-500/20 pointer-events-none' />
          )}
          <FilesIcon />
          <p>Drag and Drop your image</p>
          {file && <Image src={URL.createObjectURL(file)} alt='image' fill />}
        </label>
        <textarea
          className='outline-none text-lg'
          name='text'
          id='input-text'
          rows={10}
          ref={textRef}
          required
          placeholder='Write a caption...'
        ></textarea>
        <Button text='Publish' onClick={() => {}} />
      </form>
    </section>
  );
}
