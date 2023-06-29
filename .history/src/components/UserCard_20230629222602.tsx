import { SearchUser } from '@/model/user';
import Link from 'next/link';

type Props = {
  user: SearchUser;
};
export default function UserCard({
  user: { name, username, followingCount, followersCount, image },
}: Props) {
  return (
    <Link
      href={`/user/${username}`}
      className='flex items-center gap-2 p-4 border mb-2 cursor-pointer'
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image!} alt='user image' className='w-20 h-20 rounded-full' />
      <div>
        <p className='leading-4 font-bold'>{username}</p>
        <p className='text-slate-400'>{name}</p>
        <p className='text-slate-400 text-sm'>
          <span className='mr-1'>{followersCount} followers</span>
          <span>{followingCount} following</span>
        </p>
      </div>
    </Link>
  );
}
