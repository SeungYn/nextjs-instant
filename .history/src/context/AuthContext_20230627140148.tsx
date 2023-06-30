'use client';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

type Props = {
  children: ReactNode;
};

export default function AuthContext({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
