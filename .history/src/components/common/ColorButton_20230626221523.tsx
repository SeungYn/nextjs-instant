type Props = {
  text: string;
  onClick: () => void;
  size: 'small' | 'big';
};

export default function ColorButton({ text, onClick, size = 'small' }: Props) {
  return (
    <div className='p-[0.15rem] bg-gradient-to-bl from-cyan-500 to-blue-500 rounded inline-block'>
      <button
        className='bg-white p-1 text-base hover:opacity-90 transition-opacity'
        onClick={onClick}
      >
        {text}{' '}
      </button>
    </div>
  );
}
