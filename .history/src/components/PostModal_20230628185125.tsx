import { MouseEvent } from 'react';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};
export default function PostModal({ onClose, children }: Props) {
  const onClick = (e: MouseEvent<HTMLElement, MouseEvent>) => {
    onClose();
  };
  return <section onClick={(e) => {}}></section>;
}
