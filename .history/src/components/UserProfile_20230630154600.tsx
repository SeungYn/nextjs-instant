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
    <section className='w-full flex flex-col md:flex-row'>
      <Avatar image={image} border size='big' />
      <div>
        <h1>{username}</h1>
        <FollowButton user={user} />
        <ul>
          {info.map(({ title, data }) => (
            <li key={title}>
              <span>{data}</span> {title}
            </li>
          ))}
        </ul>
        <p>{name}</p>
      </div>
    </section>
  );
}
