import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  article?: string | null;
  commentedAt?: Date | null;
  commentText?: string | null;
  content?: string | null;
  post?: PostWhereUniqueInput | null;
};
