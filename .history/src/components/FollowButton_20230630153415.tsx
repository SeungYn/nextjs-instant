'use client';
import { HomeUser, ProfileUser } from '@/model/user';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import Button from './common/Button';

type Props = {
  user: ProfileUser;
};

/**
 * 버튼은 클라이언트 컴포넌트 임으로 서버 로직을 사용 불가
 * 클라이언트 로직을 작성해야함
 */
export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { data } = useQuery<HomeUser>({
    queryKey: ['me'],
    queryFn: () => instance.get('/me'),
  });
  const showButton = data && data.username !== username;
  const following =
    data && data.following.find((item) => item.username === username);

  const text = following ? 'Unfollow' : 'Follow';

  return (
    <>
      {showButton && (
        <Button text={text} onClick={() => {}} red={text === 'Unfollow'} />
      )}
    </>
  );
}
