import React, { FC } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Button
} from "@material-ui/core";
import { CommentList } from "../CommentList";

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
    },
    button: {
      margin: theme.spacing(0.5)
    },
    input: {
      display: "none"
    }
  })
);

// TODO: Need to change any to a specific type.
export const CommentBox: FC<any> = props => {
  const classes = useStyles();
  const saveButtonLabel = "save";
  const shareButtonLabel = "share";
  const publishButtonLabel = "publish";

  const tableHeading = [
    "User",
    "Comment",
    "Resolution Pros",
    "Resolution Cons",
    "Scenario Rating",
    "Approval"
  ];

  //handle action for save,share and publish buttons.
  const handleSave: React.MouseEventHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    if (props.saveButtonAction) {
      props.saveButtonAction(event);
    }
  };

  const handleShare: React.MouseEventHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    if (props.shareButtonAction) {
      props.shareButtonAction(event);
    }
  };

  const handlePublish: React.MouseEventHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    if (props.publishButtonAction) {
      props.publishButtonAction(event);
    }
  };

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeading.map((item, index) => (
              <TableCell key={index} className={classes.head}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <CommentList {...props} />
      </Table>
      <Box m={1} display="flex" justifyContent="flex-end">
        <Button
          onClick={handleSave}
          id="save-button-Comment"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          {saveButtonLabel}
        </Button>

        <Button
          onClick={handleShare}
          id="share-button-Comment"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          {shareButtonLabel}
        </Button>

        <Button
          onClick={handlePublish}
          id="publish-button-Comment"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          {publishButtonLabel}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export * from "./_dataTypes";
