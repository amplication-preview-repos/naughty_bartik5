import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CommentWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  post?: PostWhereUniqueInput;
  commentedAt?: DateTimeNullableFilter;
  commentText?: StringNullableFilter;
  article?: StringNullableFilter;
};
