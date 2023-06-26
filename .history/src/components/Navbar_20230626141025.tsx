'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className='p-8 flex justify-between items-center'>
      <h1 className='text-4xl font-bold'>Instrantgram</h1>
      <ul className='flex gap-4'>
        <li>
          <Link href={'/'}>
            {pathname !== '/' ? (
              <AiOutlineHome className='text-4xl' />
            ) : (
              <AiFillHome className='text-4xl' />
            )}
          </Link>
        </li>
        <li>
          <Link href={'/'}>{<AiFillHome />}</Link>
        </li>
        <li>1</li>
      </ul>
    </nav>
  );
}
