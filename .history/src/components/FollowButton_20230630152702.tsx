import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ProfileUser } from '@/model/user';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import { getServerSession } from 'next-auth';

type Props = {
  user: ProfileUser;
};

/**
 * 버튼은 클라이언트 컴포넌트 임으로 서버 로직을 사용 불가
 * 클라이언트 로직을 작성해야함
 */
export default function FollowButton({ user }: Props) {
  const { data } = useQuery({
    queryKey: ['me'],
    queryFn: () => instance.get('/me'),
  });

  return <div>FollowButton</div>;
}
