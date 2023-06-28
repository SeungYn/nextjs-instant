import { SimplePost } from '@/model/post';
import { instance } from '@/service/http';
import { useQuery } from '@tanstack/react-query';

type Props = {
  post: SimplePost;
};
export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = useQuery({
    queryKey: ['post', id],
    queryFn: () => instance.get(`/posts/${id}`),
  });
  console.log(data);
  return <div></div>;
}
