export type AuthUser = {
  name: string;
  username: string;
  email: string;
  image?: string;
};

export type SimpleUser = Pick<AuthUser, 'username' | 'image'>;

export type DetailUser = AuthUser & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
};

export type SearchUser = {
  followingCount: number | null;
  followersCount: number | null;
} & AuthUser;
