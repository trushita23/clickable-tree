import React, { FC } from "react";
import {
  TableCell,
  TableRow,
} from "@material-ui/core";
import { CommentData } from "../CommentBox/_dataTypes";

export const Comment: FC<CommentData> = props => {
  return (
    <TableRow key ={props.id}>
      <TableCell component="th" scope="row">
        <img width="50%" alt="profile" src="img/man.svg" />
        {props.user.firstName}
        {props.user.lastName}
      </TableCell>
      <TableCell>{props.comment}</TableCell>
      <TableCell>{props.resPros}</TableCell>
      <TableCell>{props.resCons}</TableCell>
      <TableCell>
        <img width="50%" alt="scenario rating" src={props.scenarioRating} />
      </TableCell>
      <TableCell>{props.approval}</TableCell>
    </TableRow>
  );
};
