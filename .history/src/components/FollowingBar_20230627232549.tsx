'use client';

import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function FollowingBar() {
  const { data } = useQuery({
    queryKey: ['test'],
    queryFn: () => instance.get('/me'),
  });

  console.log(data);
  return <div>FollowingBar</div>;
}
