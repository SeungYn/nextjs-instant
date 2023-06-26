import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ColorButton from '@/components/common/ColorButton';
import { getServerSession } from 'next-auth';
import { signIn } from 'next-auth/react';

export default async function page() {
  const session = await getServerSession(authOptions);
  return <section className='h-full'></section>;
}
