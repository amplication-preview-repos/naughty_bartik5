import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  name?: string | null;
  password?: string | null;
  posts?: PostUpdateManyWithoutUsersInput;
};
