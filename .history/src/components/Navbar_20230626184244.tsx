'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import {
  HomeFillIcon,
  HomeIcon,
  PlusFillIcon,
  PlusIcon,
  SearchFillIcon,
  SearchIcon,
} from './icons';
import ColorButton from './common/ColorButton';

const menu = [
  { href: '/', icon: <HomeIcon />, checkedIcon: <HomeFillIcon /> },
  { href: '/search', icon: <SearchIcon />, checkedIcon: <SearchFillIcon /> },
  { href: '/post', icon: <PlusIcon />, checkedIcon: <PlusFillIcon /> },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className='p-4 flex justify-between items-center'>
      <h1 className='text-3xl font-bold'>Instrantgram</h1>
      <ul className='flex gap-4 items-center'>
        {menu.map((item) => {
          console.log(item);
          return (
            <li key={item.href}>
              <Link href={item.href}>
                {pathname !== item.href ? item.icon : item.checkedIcon}
              </Link>
            </li>
          );
        })}

        <ColorButton text='Sign In' onClick={() => {}} />
      </ul>
    </nav>
  );
}
