'use client';
import { DetailUser } from '@/model/user';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';

export default function FollowingBar() {
  const { data, error, isLoading } = useQuery<DetailUser>({
    queryKey: ['test'],
    queryFn: () => instance.get('/m'),
  });
  const users = data?.following;

  return <section></section>;
}
