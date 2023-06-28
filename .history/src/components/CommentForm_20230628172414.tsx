export default function CommentForm() {
  return (
    <form className='flex items-center border-t border-neutral-300 '>
      <SmileIcon />
      <input
        className='w-full ml-2 border-none outline-none p-3'
        type='text'
        placeholder='add text'
      />
      <button className='font-bold text-sky-500 ml-2'>post</button>
    </form>
  );
}
