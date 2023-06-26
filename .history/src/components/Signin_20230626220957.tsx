import { ClientSafeProvider } from 'next-auth/react';

type Props = {
  providers: Record<string, ClientSafeProvider>;
};

export default function Signin({ providers }: Props) {
  console.log(providers);
  return <div></div>;
}
