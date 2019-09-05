import React from "react";
import { Paper } from "@material-ui/core";
import { Title, CreateComment } from "../../components/Loadables";
import { createCommentProps } from "./config";

const Comments: React.FC = () => {
  return (
    <Paper>
      <Title title="Scenario Comment"/>
      <CreateComment {...createCommentProps} />
    </Paper>
  );
};

export default Comments;
