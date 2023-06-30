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
          <p className='font-bold'>{username}</p>
          <p className='text-lg text-neutral-500 leading-4'>{name}</p>
        </div>
      </div>
      <p className='text-sm text-neutral-500 mt-8'>
        About • Help • Press • API • Jobs • Privacy • Help • Press • API • Jobs
        • Privacy
      </p>
      <p className='font-bold text-sm mt-8'>@Copyright INSTANTGRAM</p>
    </>
  );
}
