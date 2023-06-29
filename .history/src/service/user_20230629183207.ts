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