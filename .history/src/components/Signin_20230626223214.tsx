'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import ColorButton from './common/ColorButton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
  console.log(providers);
  return (
    <>
      {Object.values(providers).map((provider) => (
        <ColorButton
          key={provider.id}
          text={`Sign in with ${provider.name}`}
          onClick={() => signIn(provider.id, { callbackUrl })}
          size='big'
        />
      ))}
    </>
  );
}
