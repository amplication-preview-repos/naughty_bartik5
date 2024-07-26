import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PostWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  comments?: CommentListRelationFilter;
  category?: CategoryWhereUniqueInput;
  body?: StringNullableFilter;
  publishedAt?: DateTimeNullableFilter;
  author?: StringNullableFilter;
  headline?: StringNullableFilter;
  contentBody?: StringNullableFilter;
  postCreatedAt?: DateTimeNullableFilter;
  postAuthor?: StringNullableFilter;
  slug?: StringNullableFilter;
};
