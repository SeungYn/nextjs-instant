type Props = {
  text: string;
  onClick: () => {};
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className='p-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded'>
      <button className='bg-white p-1'>Sign In </button>
    </div>
  );
}
