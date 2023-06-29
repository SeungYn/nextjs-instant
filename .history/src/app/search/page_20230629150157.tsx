import { getUsersByUsername } from '@/service/user';
import { BsDatabaseFillCheck } from 'react-icons/bs';

export default async function Page() {
  const data = await getUsersByUsername('kwls0407');
  console.log(data);
  return <section>Search</section>;
}
