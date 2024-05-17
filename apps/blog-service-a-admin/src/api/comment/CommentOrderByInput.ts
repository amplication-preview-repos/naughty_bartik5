import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  article?: SortOrder;
  commentedAt?: SortOrder;
  commentText?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
};
