import React from 'react';
import { Grid, Paper, Box } from "@material-ui/core";
import { DynamicTabs, CheckBoxTreeViewConfig } from './components/SimpleTabs';

const componenConfig: CheckBoxTreeViewConfig = {
  title: "View Controller",
  tabsUrl : "http://localhost:3001/jda/tabs",
  tabPanelUrl : "http://localhost:3001/jda/tabs", // tab value gets appended to this URL
  collapsibelTreeView: false,
  showSelectAll :true,
  updateButton: true
}
const App: React.FC = () => {
  return (
      <div className="App">
        <Grid container spacing={0}>
          <Grid item xs={4}>
          <Paper>
              <Box p={1}>
                <DynamicTabs {...componenConfig}>Loading..</DynamicTabs>
               </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
  );
}

export default App;
