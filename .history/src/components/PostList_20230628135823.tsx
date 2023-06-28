import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';

export default function PostList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['post'],
    queryFn: () => instance.get('/posts'),
  });
  return <div>PostList</div>;
}
