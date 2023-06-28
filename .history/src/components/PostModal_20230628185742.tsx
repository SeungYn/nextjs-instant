'use client';
import { MouseEvent } from 'react';
import { CloseIcon } from './icons';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};
export default function PostModal({ onClose, children }: Props) {
  const onClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };
  return (
    <section
      onClick={onClick}
      className='fixed top-0 left-0 w-full h-full bg-slate-400 z-[100]'
    >
      <button>
        <CloseIcon />
      </button>
    </section>
  );
}
