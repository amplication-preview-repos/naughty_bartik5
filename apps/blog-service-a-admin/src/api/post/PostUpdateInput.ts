import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type PostUpdateInput = {
  title?: string | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  category?: CategoryWhereUniqueInput | null;
  body?: string | null;
  publishedAt?: Date | null;
  author?: string | null;
  headline?: string | null;
  contentBody?: string | null;
  postCreatedAt?: Date | null;
  postAuthor?: string | null;
  slug?: string | null;
};
