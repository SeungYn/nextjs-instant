import { AiOutlineHome } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';

export function HomeIcon() {
  return <AiOutlineHome className='text-4xl' />;
}
export function HomeFillIcon() {
  return <AiFillHome className='text-4xl' />;
}
export function SearchIcon() {
  return <RiSearchLine className='text-4xl' />;
}
export function SearchFillIcon() {
  return <RiSearchFill className='text-4xl' />;
}
export function PlusIcon() {
  return <BsPlusSquare className='text-4xl' />;
}
export function PlusFillIcon() {
  return <BsPlusSquareFill className='text-4xl' />;
}
