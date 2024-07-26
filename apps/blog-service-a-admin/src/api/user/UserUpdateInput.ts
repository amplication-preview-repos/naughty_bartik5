import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  posts?: PostUpdateManyWithoutUsersInput;
};
