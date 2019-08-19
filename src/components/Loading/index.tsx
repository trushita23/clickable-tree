import React, { FC } from "react";
import { Paper, LinearProgress } from "@material-ui/core";

const Loading: FC<{}> = props => {
  return (
    <Paper>
      "Loading..."
      <LinearProgress />
    </Paper>
  );
};

export default Loading;
