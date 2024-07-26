import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "article";

export const CommentTitle = (record: TComment): string => {
  return record.article?.toString() || String(record.id);
};
