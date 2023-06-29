import { getUsersByUsername } from '@/service/user';

export default async function Page() {
  const data = await getUsersByUsername('kwls0407');
  console.log(data);
  return <section>Search</section>;
}
