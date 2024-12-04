import { Post } from "../post/Post";

export type Comment = {
  article: string | null;
  commentedAt: Date | null;
  commentText: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  updatedAt: Date;
};
