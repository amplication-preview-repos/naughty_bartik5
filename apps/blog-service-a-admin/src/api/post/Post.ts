import { User } from "../user/User";
import { Comment } from "../comment/Comment";
import { Category } from "../category/Category";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  user?: User | null;
  comments?: Array<Comment>;
  category?: Category | null;
  body: string | null;
  publishedAt: Date | null;
  author: string | null;
  headline: string | null;
  contentBody: string | null;
  postCreatedAt: Date | null;
  postAuthor: string | null;
  slug: string | null;
};
