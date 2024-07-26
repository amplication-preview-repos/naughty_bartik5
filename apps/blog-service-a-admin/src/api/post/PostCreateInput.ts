import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type PostCreateInput = {
  title?: string | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
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
