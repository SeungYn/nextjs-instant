import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ProfileUser } from '@/model/user';
import { getServerSession } from 'next-auth';

type Props = {
  user: ProfileUser;
};
export default await function FollowButton({ user }: Props) {
  const me = getServerSession(authOptions);
  console.log(me);
  return <div>FollowButton</div>;
};
