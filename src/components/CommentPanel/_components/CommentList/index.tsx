import React, { FC } from "react";
import { TableBody } from "@material-ui/core";
import { Comment } from "../Comment";
import { CommentData } from "./_dataTypes";

// Fetches all the comments
const getCommentList = (comments: ReadonlyArray<CommentData>) => {
  const commentList: Array<any> = [];
  comments.forEach((comment: CommentData) =>
    commentList.push(<Comment key ={comment.id} {...comment} />)
  );
  return commentList;
};

const getComments = (comments: ReadonlyArray<CommentData>) => {
  return getCommentList(comments);
};
export const CommentList: FC<any> = props => {
  return <TableBody>{getComments(props.commentList)}</TableBody>;
};

export * from "./_dataTypes";
