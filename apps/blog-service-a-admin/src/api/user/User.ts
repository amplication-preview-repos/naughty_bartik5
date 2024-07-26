import { Post } from "../post/Post";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  password: string | null;
  posts?: Array<Post>;
};
