import { Post } from "../post/Post";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  post?: Post | null;
  commentedAt: Date | null;
  commentText: string | null;
  article: string | null;
};
