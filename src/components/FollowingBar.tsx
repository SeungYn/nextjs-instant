'use client';
import { HomeUser } from '@/model/user';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import Avatar from './Avatar';
import ScrollableBar from './ScrollableBar';

export default function FollowingBar() {
  const { data, error, isLoading } = useQuery<HomeUser>({
    queryKey: ['me'],
    queryFn: () => instance.get('/me'),
  });
  const users = data?.following;

  return (
    <section className='flex justify-center items-center p-4 shadow-md shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto'>
      {isLoading ? (
        <PropagateLoader size={8} color='red' />
      ) : (
        !users || (users.length === 0 && <p>{`You don't have follwing `}</p>)
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              href={`/user/${username}`}
              className='flex flex-col items-center w-20'
            >
              <Avatar image={image} size='big' border />
              <p className='w-full text-sm text-center text-ellipsis overflow-hidden'>
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
