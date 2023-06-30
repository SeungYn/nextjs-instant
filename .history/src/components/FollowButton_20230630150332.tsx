import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ProfileUser } from '@/model/user';
import { getServerSession } from 'next-auth';

type Props = {
  user: ProfileUser;
};
export default async function FollowButton({ user }: Props) {
  const session = await getServerSession(authOptions);
  console.log(session?.user);
  return <div>FollowButton</div>;
}
