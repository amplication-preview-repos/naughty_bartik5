import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentWhereInput = {
  article?: StringNullableFilter;
  commentedAt?: DateTimeNullableFilter;
  commentText?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
};
