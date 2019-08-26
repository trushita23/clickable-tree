import React, { FC } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  TableBody,
} from "@material-ui/core";
import { Comment } from "../Comment";
import { CommentData } from "./_dataTypes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
      borderBottom: "1px"
    },
    table: {
      minWidth: 500
    },
    head: {
      fontSize: ".7rem"
    }
  })
);

// Fetches all the comments
const getCommentList = (comments: ReadonlyArray<CommentData>) => {
  const commentList: Array<any> = [];
  comments.forEach((comment: CommentData) =>
    commentList.push(<Comment {...comment} />)
  );
  return commentList;
};

const getComments = (comments: ReadonlyArray<CommentData>) => {
  return getCommentList(comments);
};
export const CommentList: FC<any> = props => {
  const classes = useStyles();
  return <TableBody>{getComments(props.commentList)}</TableBody>;
};

export * from "./_dataTypes";
