import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="password" source="password" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Post" target="userId" label="Posts">
          <Datagrid rowClick="show">
            <TextField label="Author" source="author" />
            <TextField label="body" source="body" />
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <TextField label="contentBody" source="contentBody" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="headline" source="headline" />
            <TextField label="ID" source="id" />
            <TextField label="postAuthor" source="postAuthor" />
            <TextField label="postCreatedAt" source="postCreatedAt" />
            <TextField label="publishedAt" source="publishedAt" />
            <TextField label="slug" source="slug" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
