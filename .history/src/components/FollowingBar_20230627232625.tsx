'use client';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';

export default function FollowingBar() {
  const { data } = useQuery({
    queryKey: ['test'],
    queryFn: () => instance.get('/me'),
  });

  console.log(data);
  return <div>FollowingBar</div>;
}
