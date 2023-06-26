'use client';
import ColorButton from '@/components/common/ColorButton';
import { signIn } from 'next-auth/react';
export default function page() {
  return (
    <section className='h-full'>
      <ColorButton
        text='Sign In with Google'
        onClick={() => {
          signIn();
        }}
      />
    </section>
  );
}
