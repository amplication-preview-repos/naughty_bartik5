import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  author?: string | null;
  body?: string | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
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
