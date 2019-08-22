import React, { FC } from "react";
import {
  Typography,
  makeStyles,
  createStyles,
  Theme,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
  IconButton,
  Box,
} from "@material-ui/core";
import { Comment } from "./_dataTypes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      borderBottom:'1px'
    },
    table: {
      minWidth: 500,
    },
    head: {
      fontSize: '.7rem',
      
    }
  })
);
// function createData(name: string, profileUrl: string, comment: string, carbs: number, protein: number) {
//   return { name, profileUrl, comment, carbs, protein };
// }

// const rows = [
//   createData('Adam Taylor', "/img/man.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ", 24, 4.0),
//   createData('Amy Sand', "/img/man.svg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ", 37, 4.3),
//   createData('Eclair Lance', "/img/man.svg", "Lorem ipsum dolor sit amet", 24, 6.0),
//   createData('Kenny Sebu', "/img/man.svg", "Lorem ipsum dolor sit amet", 67, 4.3),
//   createData('John Brown', "/img/man.svg", "Lorem ipsum dolor sit amet", 49, 3.9),
// ];

// Fetches all the comments
const getCommentList = (comments:ReadonlyArray<Comment>) => {
  const commentList: Array<any> =[];
  comments.forEach((comment: Comment, key: number) =>
  commentList.push(
    <TableRow key={key}>
        <TableCell component="th" scope="row">
          <img width="50%" src="img/man.svg"/>
          {comment.user.firstName}
          {comment.user.lastName}
        </TableCell>
        <TableCell >{comment.comment}</TableCell>
        <TableCell >{comment.resPros}</TableCell>
        <TableCell >{comment.resCons}</TableCell>
        <TableCell ><img width="50%" src={comment.scenarioRating}/></TableCell>
        <TableCell >{comment.approval}</TableCell>
    </TableRow>
  )
 );
 return commentList;
}

const getComments = (comments: ReadonlyArray<Comment>) => {
  return getCommentList(comments);
};
export const CommentBox: FC<any> = (props) => {
	const classes = useStyles();
  return (
    <React.Fragment>
		<Table className={classes.table}>
        <TableHead >
          <TableRow>
            <TableCell className={classes.head} align="center">User</TableCell>
            <TableCell className={classes.head} align="center">Comment</TableCell>
            <TableCell className={classes.head} align="center">Resolution Pros</TableCell>
            <TableCell className={classes.head} align="center">Resolution Cons</TableCell>
            <TableCell className={classes.head} align="center">Scenario Rating</TableCell>
						<TableCell className={classes.head} align="center">Approval</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getCommentList(props.commentList)}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export * from "./_dataTypes";
