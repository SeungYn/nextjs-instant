'use client';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';

export default function FollowingBar() {
  const { data, error } = useQuery({
    queryKey: ['test'],
    queryFn: () => instance.get('/me'),
  });

  console.log(data);
  console.log(error);
  return <div>FollowingBar</div>;
}
