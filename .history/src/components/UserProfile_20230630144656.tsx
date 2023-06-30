import { ProfileUser } from '@/model/user';

type Props = {
  user: ProfileUser;
};
export default function UserProfile({ user }: Props) {
  const {} = user;
  return <div>{user.username}</div>;
}
