'use client';
import { instance } from '@/service/http';
import { getUsersByUsername } from '@/service/user';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
  const { data } = useQuery({
    queryKey: ['search'],
    queryFn: () => instance.get('/user/kwls0407'),
  });
  console.log(data);
  return <section>Search</section>;
}
