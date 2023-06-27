import { User } from '@/model/user';

type Props = {
  user: User;
};

export default function SideBar({ user }: Props) {
  console.log(user);
  return <div>SideBar</div>;
}
