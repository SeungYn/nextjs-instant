import { SearchUser } from '@/model/user';
import { client } from './sanity';

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export async function addUser({ username, id, email, name, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    email,
    name,
    image,
    following: [],
    foolowers: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch(`*[_type=="user" && username == "${username}"][0]{
    ...,
    "id":_id,
    following[]->{username, image},
    followers[]->{username, image},
    "bookmarks": bookmarks[]->_id,
  }`);
}

export async function getUsersAll() {
  return client.fetch(`*[_type=="user"]{
    ...,
    "id":_id,
    "followingCount":count(following),
    "followersCount":count(followers),
  }`);
}

export async function getUsersByName(name: string) {
  return client.fetch(`*[_type=="user" && name == "${name}"]{
    ...,
    "id":_id,
    "followingCount":count(following),
    "followersCount":count(followers),
  }`);
}

export async function getUsersByUsername(Username: string) {
  return client.fetch(`*[_type=="user" && username == "${Username}"]{
    ...,
    "id":_id,
    "followingCount":count(following),
    "followersCount":count(followers),
  }`);
}

export async function searchUser(keyword?: string) {
  const query = keyword
    ? `&& (name match "*${keyword}*") || (username match "*${keyword}*")`
    : '';

  return client
    .fetch(
      `*[_type == "user" ${query}]{
    ...,
    "id":_id,
    "followingCount":count(following),
    "followersCount":count(followers),
  }`
    )
    .then((users: SearchUser[]) =>
      users.map((item) => ({
        ...item,
        followersCount: item.followersCount ?? 0,
        followingCount: item.followingCount ?? 0,
      }))
    );
}

export async function getUserForProfile(username: string) {
  console.log(username, 'username');
  return client
    .fetch(
      `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id,
      "followingCount":count(following),
      "followersCount":count(followers),
      "postsCount": count(*[_type == "post" && author->username == "${username}}"])
    }
  `
    )
    .then((data) => ({
      ...data,
      followingCount: data.followingCount ?? 0,
      followersCount: data.followersCount ?? 0,
      postsCount: data.postsCount ?? 0,
    }));
}

export async function bookmarkPost(userId: string, postId: string) {
  console.log(userId, postId);
  return client
    .patch(userId)
    .append('bookmarks', [
      {
        _ref: postId,
        _type: 'reference',
      },
    ])
    .commit({ autoGenerateArrayKeys: true });
}

export async function disBookmarkPost(userId: string, postId: string) {
  return client
    .patch(userId)
    .unset([`bookmarks[_ref=="${postId}"]`])
    .commit();
}

export async function follow(myId: string, targetId: string) {
  return client
    .transaction()
    .patch(myId, (user) =>
      user
        .setIfMissing({ following: [] })
        .append('following', [{ _ref: targetId, _type: 'reference' }])
    )
    .patch(targetId, (user) =>
      user
        .setIfMissing({ followers: [] })
        .append('followers', [{ _ref: myId, _type: 'reference' }])
    )
    .commit({ autoGenerateArrayKeys: true });
}

export async function unfollow(myId: string, targetId: string) {
  return client
    .transaction()
    .patch(myId, (user) => user.unset([`following[_ref=="${targetId}"]`]))
    .patch(targetId, (user) => user.unset([`followers[_ref=="${myId}"]`]))
    .commit({ autoGenerateArrayKeys: true });
}
