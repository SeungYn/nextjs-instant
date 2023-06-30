type Props = {
  text: string;
  onClick: () => void;
  red?: boolean;
};
export default function Button({ text, onClick, red }: Props) {
  return (
    <button
      className={`border-none rounded-md py-2 px-8 text-white font-bold ${
        red ? 'bg-red-700' : 'bg-blue-500'
      }`}
    >
      {text}
    </button>
  );
}
