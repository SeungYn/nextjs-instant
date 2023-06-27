'use client';
import { DetailUser } from '@/model/user';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import Avatar from './Avatar';

export default function FollowingBar() {
  const { data, error, isLoading } = useQuery<DetailUser>({
    queryKey: ['test'],
    queryFn: () => instance.get('/me'),
  });
  const users = data?.following;

  return (
    <section className='w-full flex'>
      {isLoading ? (
        <PropagateLoader size={8} color='red' />
      ) : (
        !users || (users.length === 0 && <p>{`You don't have follwing `}</p>)
      )}
      {users && users.length > 0 && (
        <ul className='w-full flex gap-2'>
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link
                href={`/user/${username}`}
                className='flex flex-col items-center w-20'
              >
                <Avatar image={image} size='small' border />
                <p className='w-full text-sm text-center text-ellipsis overflow-hidden'>
                  {username}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
