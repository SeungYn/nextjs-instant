'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function FollowingBar() {
  const { data } = useQuery({
    queryKey: ['test'],
    queryFn: () => axios({ method: 'get', url: '/api/auth' }),
  });

  console.log(data);
  return <div>FollowingBar</div>;
}
