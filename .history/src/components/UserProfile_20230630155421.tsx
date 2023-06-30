import { ProfileUser } from '@/model/user';
import Avatar from './Avatar';
import FollowButton from './FollowButton';

type Props = {
  user: ProfileUser;
};
export default function UserProfile({ user }: Props) {
  const { image, username, name, followersCount, followingCount, postsCount } =
    user;

  const info = [
    { title: 'posts', data: postsCount },
    { title: 'followers', data: followersCount },
    { title: 'following', data: followingCount },
  ];

  return (
    <section className='w-full flex flex-col md:flex-row items-center justify-center py-12  border-b border-neutral-300 '>
      <Avatar image={image} border size='big' />
      <div className='md:ml-10 basis-1/3'>
        <div className='flex flex-col items-center md:flex-row'>
          <h1 className='text-2xl md:mr-8 my-2 md:mb-0'>{username}</h1>
          <FollowButton user={user} />
        </div>
        <ul className='my-4 flex gap-4'>
          {info.map(({ title, data }) => (
            <li key={title}>
              <span className='font-bold mr-1'>{data}</span> {title}
            </li>
          ))}
        </ul>
        <p className='text-xl font-bold text-center'>{name}</p>
      </div>
    </section>
  );
}
