import React, { FC } from "react";
import {
  TableCell,
  TableRow,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import { CommentData } from "../CommentBox/_dataTypes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      fontSize: 50,
      margin: "2%",
      cursor: "pointer"
    }
  })
);
export const Comment: FC<CommentData> = props => {
  const classes = useStyles();

  return (
    <TableRow key={props.id}>
      <TableCell component="th" scope="row">
        <img width="30%" alt="profile" src="img/man.svg" />
        {props.user.firstName}
        {props.user.lastName}
      </TableCell>
      <TableCell>{props.comment}</TableCell>
      <TableCell>{props.resPros}</TableCell>
      <TableCell>{props.resCons}</TableCell>
      <TableCell>
        {/* <img width="50%" alt="scenario rating" src={props.scenarioRating} /> */}
        <ThumbUpAltOutlinedIcon
          fontSize="large"
          color="primary"
          className={classes.img}
        />
      </TableCell>
      <TableCell>{props.approval}</TableCell>
    </TableRow>
  );
};
