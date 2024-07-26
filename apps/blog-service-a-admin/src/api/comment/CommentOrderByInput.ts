import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  postId?: SortOrder;
  commentedAt?: SortOrder;
  commentText?: SortOrder;
  article?: SortOrder;
};