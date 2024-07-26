import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { CommentTitle } from "../comment/CommentTitle";
import { CategoryTitle } from "../category/CategoryTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="body" multiline source="body" />
        <DateTimeInput label="publishedAt" source="publishedAt" />
        <TextInput label="Author" source="author" />
        <TextInput label="headline" source="headline" />
        <TextInput label="contentBody" multiline source="contentBody" />
        <DateTimeInput label="postCreatedAt" source="postCreatedAt" />
        <TextInput label="postAuthor" source="postAuthor" />
        <TextInput label="slug" source="slug" />
      </SimpleForm>
    </Create>
  );
};
