'use client';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
  const { data } = useQuery({
    queryKey: ['search'],
    queryFn: () => instance.get(`/user?keyword=${'1'}`),
  });
  console.log(data);
  return <section>Search</section>;
}
