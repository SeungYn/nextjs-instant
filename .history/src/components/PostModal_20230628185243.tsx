'use client';
import { MouseEvent } from 'react';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};
export default function PostModal({ onClose, children }: Props) {
  const onClick = (e: MouseEvent) => {
    onClose();
  };
  return <section onClick={onClick}></section>;
}
