import React from "react";
import { Paper, Grid } from "@material-ui/core";
import { Title, CreateComment, CommentPanel} from "../../components/Loadables";
import { createCommentProps,commentPanelProps } from "./config";

const Comments: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>
          <Title title="Scenario Comment" />
          <CreateComment {...createCommentProps} />
        </Paper>
      </Grid>
      <Grid item xs={12} spacing={2}>
        <Paper>
          <Title title=" Display Comments " />
          <CommentPanel {...commentPanelProps} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Comments;
