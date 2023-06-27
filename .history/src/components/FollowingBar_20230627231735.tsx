'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function FollowingBar() {
  const {} = useQuery({
    queryKey: ['test'],
    queryFn: () => axios({ method: 'get', url: '/api/auth' }),
  });
  return <div>FollowingBar</div>;
}
