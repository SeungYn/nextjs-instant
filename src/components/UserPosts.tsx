'use client';
import { SimplePost } from '@/model/post';
import { ProfileUser } from '@/model/user';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

type Props = {
  user: ProfileUser;
};

export default function UserPosts({ user }: Props) {
  const [tab, setTab] = useState('like');
  const { data } = useQuery<SimplePost>({
    queryKey: [user.username, tab],
    queryFn: () => instance.get(`/users/${user.username}/${tab}`),
  });
  console.log(data);
  return <div></div>;
}
