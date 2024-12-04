import { Post } from "../post/Post";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  password: string | null;
  posts?: Array<Post>;
  updatedAt: Date;
};
