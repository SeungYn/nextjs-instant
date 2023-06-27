import FollowingBar from '@/components/FollowingBar';
import PostList from '@/components/PostList';
import SideBar from '@/components/SideBar';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const user = await getServerSession(authOptions);
  console.log(user);
  return (
    <section>
      <FollowingBar />
      <PostList />
      <SideBar />
    </section>
  );
}
