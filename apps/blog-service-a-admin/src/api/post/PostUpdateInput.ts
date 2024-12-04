import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  author?: string | null;
  body?: string | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  contentBody?: string | null;
  headline?: string | null;
  postAuthor?: string | null;
  postCreatedAt?: Date | null;
  publishedAt?: Date | null;
  slug?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
