import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  author?: SortOrder;
  body?: SortOrder;
  categoryId?: SortOrder;
  content?: SortOrder;
  contentBody?: SortOrder;
  createdAt?: SortOrder;
  headline?: SortOrder;
  id?: SortOrder;
  postAuthor?: SortOrder;
  postCreatedAt?: SortOrder;
  publishedAt?: SortOrder;
  slug?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
