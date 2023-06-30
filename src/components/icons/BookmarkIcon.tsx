import { RiBookmarkLine } from 'react-icons/ri';

type Props = {
  className?: string;
};
export function BookMarkIcon({ className }: Props) {
  return <RiBookmarkLine className={className || 'w-7 h-7'} />;
}
