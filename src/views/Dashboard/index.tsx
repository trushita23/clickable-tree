import React from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import { dynamicTabProps, dynamicTreeViewProps } from "./config";

import { Title, DynamicTabs, DynamicTreeView } from "../../components/Loadables";
const Dashboard: React.FC = () => {
  return (
      <div className="App">
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Paper>
              <Box p={1}>
                <Title title="View Controller" />
                <DynamicTabs {...dynamicTabProps} />
                <DynamicTreeView {...dynamicTreeViewProps} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
  );
};

export default Dashboard;
