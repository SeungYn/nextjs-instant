'use client';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
  const { data } = useQuery({
    queryKey: ['search'],
    queryFn: () => instance.get(`/user?keyword=${''}`),
  });
  console.log(data);
  return (
    <section className='bg-slate-400 w-full max-w-[850px]'>
      <form>
        <input type='text' />
      </form>
    </section>
  );
}
