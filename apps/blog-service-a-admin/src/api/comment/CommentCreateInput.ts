import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  commentedAt?: Date | null;
  commentText?: string | null;
  article?: string | null;
};
