import React from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import { Provider } from "react-redux";
import { createStore, IModuleStore } from "redux-dynamic-modules-core";
import { getSagaExtension } from "redux-dynamic-modules-saga";
import { dynamicTabProps, dynamicTreeViewProps } from './config';

import DynamicTabs from "./components/DynamicTabs";
import Title from './components/Title';
import DynamicTreeView from './components/DynamicTreeView';
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
                <DynamicTabs {...dynamicTabProps}>Loading..</DynamicTabs>
                <DynamicTreeView {...dynamicTreeViewProps}>Loading...</DynamicTreeView>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Provider>
  );
};

export default App;
