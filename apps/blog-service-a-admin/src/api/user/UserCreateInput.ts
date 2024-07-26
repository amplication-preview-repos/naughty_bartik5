import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  posts?: PostCreateNestedManyWithoutUsersInput;
};
