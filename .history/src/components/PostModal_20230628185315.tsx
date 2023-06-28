'use client';
import { MouseEvent } from 'react';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};
export default function PostModal({ onClose, children }: Props) {
  const onClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };
  return <section onClick={onClick} className='fixed top-0 left-0'></section>;
}