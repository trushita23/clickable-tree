import React, { FC } from "react";
import { Paper, LinearProgress, Typography } from "@material-ui/core";

const Loading: FC<{}> = props => {
  return (
    <Paper>
      <Typography>
        Loading
      </Typography>
      <LinearProgress />
    </Paper>
  );
};

export default Loading;
