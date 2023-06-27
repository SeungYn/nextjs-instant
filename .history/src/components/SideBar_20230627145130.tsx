import { User } from '@/model/user';
import Avatar from './Avatar';

type Props = {
  user: User;
};

export default function SideBar({
  user: { username, name, image, email },
}: Props) {
  return (
    <>
      <div>
        {image && <Avatar image={image} size='big' border={true} />}
        <p>{username}</p>
        <p>{name}</p>
      </div>
      <p>
        About • Help • Press • API • Jobs • Privacy • Help • Press • API • Jobs
        • Privacy
      </p>
    </>
  );
}
