import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  userId?: SortOrder;
  categoryId?: SortOrder;
  body?: SortOrder;
  publishedAt?: SortOrder;
  author?: SortOrder;
  headline?: SortOrder;
  contentBody?: SortOrder;
  postCreatedAt?: SortOrder;
  postAuthor?: SortOrder;
  slug?: SortOrder;
};
