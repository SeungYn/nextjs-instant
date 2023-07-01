import { SimplePost } from '@/model/post';
import { client, urlFor } from './sanity';

const simplePostProjection = `
...,
"username" : author->username,
"userImage": author->image,
"image":photo,
"likes":likes[]->username,
"text":comments[0].comment,
"comments":count(comments),
"id":_id,
"createdAt":_createdAt
`;

export async function getFollowingPostsOf(username: string) {
  // post중에 작성자기준 포스트를 가져옴
  // 팔로잉 한 사람들 포스트 들도 가져옴
  return client
    .fetch(
      `
	*[_type == "post" && author->username == "${username}" 
	|| author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
	| order(_createdAt desc){${simplePostProjection}}
	`
    )
    .then(mapPosts);
}

export async function getPost(id: string) {
  return client
    .fetch(
      `
  *[_type=="post" && _id == "${id}"][0]{
    ...,
    "username":author->username,
    "userImage": author->image,
    "image":photo,
    "likes":likes[]-> username,
    comments[]{comment, "username": author->username, "image": author->image},
    "id":_id,
    "createdAt":_createdAt
  }`
    )
    .then((post) => ({ ...post, image: urlFor(post.image) }));
}

export async function getPostsOf(username: string) {
  return client
    .fetch(
      `*[_type == "post" && author->username == "${username}"] | order(_createdAt desc){${simplePostProjection}}`
    )
    .then(mapPosts);
}

export async function getLikedPostsOf(username: string) {
  return client
    .fetch(
      `*[_type == "post" && "${username}" in likes[]->username] | order(_createdAt desc){${simplePostProjection}}`
    )
    .then(mapPosts);
}

export async function getSavedPostsOf(username: string) {
  return client
    .fetch(
      `*[_type == "post" && _id in *[_type == "user" && username == "${username}"].bookmarks[]._ref] | order(_createdAt desc){${simplePostProjection}}`
    )
    .then(mapPosts);
}

// setIfMissing > 해당 키로가진 배열이 존재하지 않으면 새로만듬
// append 배열에 아이템 추가
// commit > 해당 아이디의 키를 생성해줘서 커밋을 해야됨
export async function likePost(postId: string, userId: string) {
  return client
    .patch(postId)
    .setIfMissing({ likes: [] })
    .append('likes', [
      {
        _ref: userId,
        _type: 'referencd',
      },
    ])
    .commit({ autoGenerateArrayKeys: true });
}

export async function disLikePost(postId: string, userId: string) {
  return client
    .patch(postId)
    .unset([`likes[_ref=="${userId}"]`])
    .commit();
}

function mapPosts(posts: SimplePost[]) {
  return posts.map((post: SimplePost) => ({
    ...post,
    likes: post.likes ?? [],
    image: urlFor(post.image),
  }));
}
