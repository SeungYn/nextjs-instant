'use client';
import { SearchUser } from '@/model/user';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [keyword, setKeyword] = useState('');
  const { data } = useQuery<SearchUser[]>({
    queryKey: ['search', keyword],
    queryFn: () => instance.get(`/user?keyword=${keyword}`),
  });
  console.log(data);
  return (
    <section className='bg-slate-400 w-full max-w-[850px] p-4'>
      <input
        type='text'
        placeholder='name'
        className='w-full'
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.name}>
              <img src={item.image!} alt='user image' className='300px 300px' />
            </li>
          ))}
      </ul>
    </section>
  );
}
