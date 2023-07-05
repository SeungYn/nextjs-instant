import { SimplePost } from '@/model/post';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';
import GridSpinner from './icons/GridSpinner';
import PostGridCard from './PostGridCard';

type Props = {
  username: string;
  query: string;
};
export default function PostGrid({ username, query }: Props) {
  const { data, isLoading } = useQuery<SimplePost[]>({
    queryKey: ['post', username, query],
    queryFn: () => instance.get(`/users/${username}/${query}`),
  });
  return (
    <div className='w-full text-center'>
      {isLoading && <GridSpinner />}
      <ul className='grid grid-cols-3 gap-4 py-4 px-8'>
        {data &&
          data.map((post) => (
            <li key={post.id}>{<PostGridCard post={post} />}</li>
          ))}
      </ul>
    </div>
  );
}
