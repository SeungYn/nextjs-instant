'use client';
import { HomeUser, ProfileUser } from '@/model/user';
import Button from './common/Button';
import useMe from '@/hooks/me';
import { useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { reloadUserPage } from '@/server-actions/user';

type Props = {
  user: ProfileUser;
};

/**
 * 버튼은 클라이언트 컴포넌트 임으로 서버 로직을 사용 불가
 * 클라이언트 로직을 작성해야함
 */
export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { user: data, toggleFollow, toggleFollowAsync } = useMe();
  const [isPendding, startTransition] = useTransition();
  const router = useRouter();
  const showButton = data && data.username !== username;
  const following =
    data && data.following.find((item) => item.username === username);

  const text = following ? 'Unfollow' : 'Follow';

  const handleFollow = async () => {
    await toggleFollowAsync({ targetUser: user, follow: !following });
    startTransition(() => reloadUserPage());
  };

  useEffect(() => {
    console.log('effect');
  }, []);

  if (!showButton) return <></>;

  return (
    <>
      <Button text={text} onClick={handleFollow} red={text === 'Unfollow'} />
    </>
  );
}
