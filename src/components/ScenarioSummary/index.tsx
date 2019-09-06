import React, { FC } from "react";
import { Typography, Paper } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";

// A place holder for KPI impact,scenario log,add comment and display comment.
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(2),
      overflowX: "auto",
      borderBottom: "1px"
    }
  })
);

const ScenarioSummaryContainer: FC<any> = props => {
  const classes = useStyles();

  return (
    <div>
      <Typography
        variant="h4"
        component= "h1"
      >
        Scenairo Summary - S1 SWAP44332
      </Typography>
      <Paper className={classes.root}>
         <Typography>KPI IMPACT place holder</Typography>
      </Paper>
      <Paper className={classes.root}>
         <Typography>Scenario Change Log place holder</Typography>
      </Paper>
      <Paper className={classes.root}>
         <Typography>Add Comment place holder</Typography>
      </Paper>
      <Paper className={classes.root}>
         <Typography>Display Comments place holder</Typography>
      </Paper>

    </div>
  );
};

export default ScenarioSummaryContainer;
