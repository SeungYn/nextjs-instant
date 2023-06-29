import { SearchUser } from '@/model/user';

type Props = {
  user: SearchUser;
};
export default function UserCard({
  user: { name, username, followingCount, followersCount },
}: Props) {
  return <div></div>;
}
