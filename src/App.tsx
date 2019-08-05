import React from 'react';
import { Grid, Paper } from "@material-ui/core";
import { DynamicTabs, CheckBoxTreeViewConfig } from './components/SimpleTabs';

const componenConfig: CheckBoxTreeViewConfig = {
  title: "View Controller",
  tabsUrl : "http://localhost:3001/jda/tabs",
  tabPanelUrl : "http://localhost:3001/jda/tabs", // tab value gets appended to this URL
  collapsibelTreeView: false,
  showSelectAll :true,
}
const App: React.FC = () => {
  return (
      <div className="App">
        <Grid container spacing={0}>
          <Grid item xs={4}>
          <Paper>
               <DynamicTabs {...componenConfig}>Loading..</DynamicTabs>
            </Paper>
          </Grid>
        </Grid>
      </div>
  );
}

export default App;
