import { useEffect, useState } from 'react';

type Props = {
  ms: number;
};

export default function useDebounceText({ ms }: Props) {
  const [text, setText] = useState('');
  const [isSendable, setIsSendable] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsSendable(true);
    }, ms);

    return () => {
      clearTimeout(timeoutId);
      setIsSendable(false);
    };
  }, [text, ms]);
  return [text, setText, isSendable];
}
