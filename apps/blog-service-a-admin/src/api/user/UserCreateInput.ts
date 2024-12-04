import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  name?: string | null;
  password?: string | null;
  posts?: PostCreateNestedManyWithoutUsersInput;
};
