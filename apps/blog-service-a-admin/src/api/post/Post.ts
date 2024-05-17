import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type Post = {
  author: string | null;
  body: string | null;
  category?: Category | null;
  comments?: Array<Comment>;
  content: string | null;
  contentBody: string | null;
  createdAt: Date;
  headline: string | null;
  id: string;
  postAuthor: string | null;
  postCreatedAt: Date | null;
  publishedAt: Date | null;
  slug: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
