import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PostTitle } from "../post/PostTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Article" source="article" />
        <DateTimeInput label="commentedAt" source="commentedAt" />
        <TextInput label="commentText" multiline source="commentText" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="post.id" reference="Post" label="Post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
