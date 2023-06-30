import { ProfileUser } from '@/model/user';
import Avatar from './Avatar';

type Props = {
  user: ProfileUser;
};
export default function UserProfile({ user }: Props) {
  const { image, username, name, followersCount, followingCount, postsCount } =
    user;
  return (
    <section>
      <Avatar image={image} border size='big' />
    </section>
  );
}
