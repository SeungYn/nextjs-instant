'use client';
import GridSpinner from '@/components/icons/GridSpinner';
import useDebounceText from '@/hooks/useDebounceText';
import { SearchUser } from '@/model/user';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [keyword, setKeyword, isSendable] = useDebounceText({ ms: 3000 });
  const { data, isLoading } = useQuery<SearchUser[]>({
    queryKey: ['search', keyword],
    queryFn: () => instance.get(`/search/${keyword}`),
    enabled: isSendable,
  });
  console.log(data);
  return (
    <section className='w-full max-w-[850px] p-4'>
      <input
        type='text'
        placeholder='name'
        className='w-full border p-2'
        onChange={(e) => setKeyword(e.target.value)}
      />
      {isLoading && <GridSpinner />}
      <ul className='p-4'>
        {data &&
          data.map((item) => (
            <li
              key={item.name}
              className='flex items-center gap-2 p-4 border mb-2 cursor-pointer'
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image!}
                alt='user image'
                className='w-20 h-20 rounded-full'
              />
              <div>
                <p className='leading-4 font-bold'>{item.username}</p>
                <p className='text-slate-400'>{item.name}</p>
                <p className='text-slate-400'>
                  <span>
                    {item.followingCount ? item.followingCount : 0} followers
                  </span>
                  <span>{item.followingCount} following</span>
                </p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
