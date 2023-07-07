'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import {
  HomeFillIcon,
  HomeIcon,
  PlusFillIcon,
  PlusIcon,
  SearchFillIcon,
  SearchIcon,
} from './icons';
import ColorButton from './common/ColorButton';
import Avatar from './Avatar';

const menu = [
  { href: '/', icon: <HomeIcon />, checkedIcon: <HomeFillIcon /> },
  { href: '/search', icon: <SearchIcon />, checkedIcon: <SearchFillIcon /> },
  { href: '/new', icon: <PlusIcon />, checkedIcon: <PlusFillIcon /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <nav className='p-4 flex justify-between items-center'>
      <h1 className='text-3xl font-bold'>Instrantgram</h1>
      <ul className='flex gap-4 items-center'>
        {menu.map((item) => {
          return (
            <li key={item.href}>
              <Link href={item.href}>
                {pathname !== item.href ? item.icon : item.checkedIcon}
              </Link>
            </li>
          );
        })}
        {user && (
          <li>
            <Link href={`/user/${user.username}`}>
              <Avatar image={user.image} />
            </Link>
          </li>
        )}
        <li>
          {session ? (
            <ColorButton
              text='Sign Out'
              onClick={() => {
                signOut();
              }}
            />
          ) : (
            <ColorButton
              text='Sign In'
              onClick={() => {
                signIn();
                //router.push('/auth/signin');
              }}
            />
          )}
        </li>
      </ul>
    </nav>
  );
}
