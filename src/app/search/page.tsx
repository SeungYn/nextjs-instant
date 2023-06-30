'use client';
import UserCard from '@/components/UserCard';
import GridSpinner from '@/components/icons/GridSpinner';
import useDebounceText from '@/hooks/useDebounceText';
import { SearchUser } from '@/model/user';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'User Search',
//   description: 'Search users to follow',
// };

export const dynamic = 'force-dynamic';

export default function Page() {
  const [keyword, setKeyword, isSendable] = useDebounceText({ ms: 3000 });
  const { data, isLoading } = useQuery<SearchUser[]>({
    queryKey: ['search', keyword],
    queryFn: () => instance.get(`/search/${keyword}`),
    enabled: isSendable,
  });

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
            <li key={item.name}>
              <UserCard user={item} />
            </li>
          ))}
      </ul>
    </section>
  );
}
