import React, { FC } from "react";
import { Table, TableHead, TableBody } from "@material-ui/core";
import { AddCommentConfig } from "./_datatypes";
import { CommentHeading } from "./CommentHeading";
import { CommentBody } from "./CommentBody";
import { CommentButtons } from "./CommentButtons";

export const AddComments: FC<AddCommentConfig> = (props) => {
  return (
    <>
      <Table>
        <TableHead>
          <CommentHeading { ...props } />
        </TableHead>
        <TableBody>
          <CommentBody { ...props } />
        </TableBody>
      </Table>
      <CommentButtons { ...props } />
    </>
  );
};
export * from './_datatypes';