import { client } from './sanity';

export async function getFollowingPostsOf(username: string) {
  // post중에 작성자기준 포스트를 가져옴
  return client.fetch(`
	*[_type == "post" && author->username == "${username}" 
	|| authro._ref in *[_type == "user" && username == "${username}"].following[]._ref]
	`);
}
