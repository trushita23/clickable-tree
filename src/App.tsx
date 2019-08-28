import React from "react";
import { Grid, Paper, Box, Typography } from "@material-ui/core";
import { Provider } from "react-redux";
import { createStore, IModuleStore } from "redux-dynamic-modules-core";
import { getSagaExtension } from "redux-dynamic-modules-saga";
import { dynamicTabProps, dynamicTreeViewProps, commentPanelProps } from './config';

import DynamicTabs from "./components/DynamicTabs";
import Title from './components/Title';
import DynamicTreeView from './components/DynamicTreeView';
import CommentPanel from './components/CommentPanel'
import AppState from './state.type';
const store: IModuleStore<AppState> = createStore({
  extensions: [getSagaExtension()]
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Paper>
              <Box p={1}>
                <Title title="View Controller"/>
                <DynamicTabs {...dynamicTabProps}><Typography>Loading..</Typography></DynamicTabs>
                <DynamicTreeView {...dynamicTreeViewProps}><Typography>Loading..</Typography></DynamicTreeView>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              <CommentPanel {...commentPanelProps}>Loading...</CommentPanel>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Provider>
  );
};

export default App;
