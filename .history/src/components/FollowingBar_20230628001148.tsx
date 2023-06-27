'use client';
import { DetailUser } from '@/model/user';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';

export default function FollowingBar() {
  const { data, error } = useQuery<DetailUser>({
    queryKey: ['test'],
    queryFn: () => instance.get('/m'),
  });

  console.log(data);
  console.log(error);
  return <div>FollowingBar</div>;
}
