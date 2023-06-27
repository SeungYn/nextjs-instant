import FollowingBar from '@/components/FollowingBar';
import PostList from '@/components/PostList';
import SideBar from '@/components/SideBar';

export default function Home() {
  return (
    <section>
      <FollowingBar />
      <PostList />
      <SideBar />
    </section>
  );
}
