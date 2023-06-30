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
    <section>
      <Avatar image={image} border size='big' />
      <div>
        <h1>{username}</h1>
        <FollowButton />
        <ul>
          {info.map(({ title, data }) => (
            <li key={title}></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
