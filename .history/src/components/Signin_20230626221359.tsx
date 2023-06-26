'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import ColorButton from './common/ColorButton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
};

export default function Signin({ providers }: Props) {
  console.log(providers);
  return (
    <>
      {Object.values(providers).map((provider) => (
        <ColorButton
          key={provider.id}
          text={`Sign in with ${provider.name}`}
          onClick={() => signIn(provider.id)}
        />
      ))}
    </>
  );
}
