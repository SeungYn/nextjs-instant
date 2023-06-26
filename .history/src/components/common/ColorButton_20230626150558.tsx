type Props = {
  text: string;
  onClick: () => void;
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className='p-[0.15rem] bg-gradient-to-bl from-cyan-500 to-blue-500 rounded'>
      <button className='bg-white p-1' onClick={onClick}>
        {text}{' '}
      </button>
    </div>
  );
}
