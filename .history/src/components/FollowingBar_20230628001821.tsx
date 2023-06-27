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
    <section>
      {isLoading ? (
        <PropagateLoader size={8} color='red' />
      ) : (
        !users || (users.length === 0 && <p>{`You don't have follwing `}</p>)
      )}
      {users && users.length > 0 && (
        <ul>
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link href={`/user/${username}`}>
                <Avatar image={image} size='small' border />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
