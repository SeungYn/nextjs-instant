'use client';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function Page() {
  const [keyword, setKeyword] = useState('');
  const { data } = useQuery({
    queryKey: ['search', keyword],
    queryFn: () => instance.get(`/user?keyword=${keyword}`),
  });
  console.log(data);
  return (
    <section className='bg-slate-400 w-full max-w-[850px]'>
      <input type='text' />
    </section>
  );
}
