import FollowingBar from '@/components/FollowingBar';
import PostList from '@/components/PostList';
import SideBar from '@/components/SideBar';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <section className='w-full flex flex-col md:flex-row max-w-[850px] p-4 '>
      {/* 가로 스크롤을 위해 min-w-0으로 해둠 flex로 아이템이 넘어가면 계속 커지는데 0으로 방지해줄 수 있음
        크기를 지정한다 하더라도 min-w-0이 없으면 계속 커짐
      */}
      <div className='basis-3/4 min-w-0'>
        <FollowingBar />
        <PostList />
      </div>
      <div className='basis-1/4 ml-8'>
        <SideBar user={user} />
      </div>
      <div id='portal'></div>
    </section>
  );
}
