'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeFillIcon,
  HomeIcon,
  PlusFillIcon,
  PlusIcon,
  SearchFillIcon,
  SearchIcon,
} from './icons';

const menu = [
  { href: '/', icon: <HomeIcon />, checkedIcon: <HomeFillIcon /> },
  { href: '/', icon: <SearchIcon />, checkedIcon: <SearchFillIcon /> },
  { href: '/', icon: <PlusIcon />, checkedIcon: <PlusFillIcon /> },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className='p-8 flex justify-between items-center'>
      <h1 className='text-4xl font-bold'>Instrantgram</h1>
      <ul className='flex gap-4 items-center'>
        {menu.map((item) => (
          <li>
            <Link href={item.href}>
              {pathname !== item.href ? item.icon : item.checkedIcon}
            </Link>
          </li>
        ))}

        <li className='p-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded'>
          <button className='bg-white p-1'>Sign In </button>
        </li>
      </ul>
    </nav>
  );
}
