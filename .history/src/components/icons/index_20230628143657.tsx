import { AiOutlineHome } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';
import { FaRegSmile } from 'react-icons/fa';

export function HomeIcon() {
  return <AiOutlineHome className='text-2xl' />;
}
export function HomeFillIcon() {
  return <AiFillHome className='text-2xl' />;
}
export function SearchIcon() {
  return <RiSearchLine className='text-2xl' />;
}
export function SearchFillIcon() {
  return <RiSearchFill className='text-2xl' />;
}
export function PlusIcon() {
  return <BsPlusSquare className='text-2xl' />;
}
export function PlusFillIcon() {
  return <BsPlusSquareFill className='text-2xl' />;
}
export function SmileIcon() {
  return <FaRegSmile className='text-2xl' />;
}
