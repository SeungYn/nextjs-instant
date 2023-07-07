import { AiOutlineHome } from 'react-icons/ai';
import { AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill, RiBookmarkLine } from 'react-icons/ri';
import { FaPhotoVideo, FaRegSmile } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { MdGridOn } from 'react-icons/md';

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
export function BookMarkIcon() {
  return <RiBookmarkLine className='text-2xl' />;
}
export function HeartIconIcon() {
  return <AiOutlineHeart className='text-2xl' />;
}
export function CloseIcon() {
  return <CgClose className='w-5 h-5' />;
}
export function PostIcon() {
  return <MdGridOn className='w-3 h-3' />;
}

export default function FilesIcon() {
  return <FaPhotoVideo className='w-20 h-20 text-gray-300' />;
}
