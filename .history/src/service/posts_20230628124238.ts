import { client } from './sanity';

const simplePostProjection = `
...,
"username" : author->username,
`;

export async function getFollowingPostsOf(username: string) {
  // post중에 작성자기준 포스트를 가져옴
  // 팔로잉 한 사람들 포스트 들도 가져옴
  return client.fetch(`
	*[_type == "post" && author->username == "${username}" 
	|| author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
	| order(_createdAt desc){${simplePostProjection}}
	`);
}
