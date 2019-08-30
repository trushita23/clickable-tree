import React, { FC } from "react";
import { Paper, LinearProgress, Typography } from "@material-ui/core";

interface loadingProps {
  what?: string;
}
const Loading: FC<loadingProps> = (props) => {
  return (
    <Paper>
      <Typography>
        Loading {props ? props.what : "Component"}
      </Typography>
      <LinearProgress />
    </Paper>
  );
};

export default Loading;
