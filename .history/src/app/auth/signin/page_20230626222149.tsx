import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Signin from '@/components/Signin';
import ColorButton from '@/components/common/ColorButton';
import { getServerSession } from 'next-auth';
import { getProviders, signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default async function page(data: any) {
  console.log(data);
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className='flex justify-center '>
      <Signin providers={providers} />
    </section>
  );
}