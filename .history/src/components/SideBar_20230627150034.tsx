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
      <div className='flex items-center'>
        {image && <Avatar image={image} size='big' border={true} />}
        <div className='ml-4'>
          <p>{username}</p>
          <p>{name}</p>
        </div>
      </div>
      <p>
        About • Help • Press • API • Jobs • Privacy • Help • Press • API • Jobs
        • Privacy
      </p>
      <p>@Copyright INSTANTGRAM</p>
    </>
  );
}
