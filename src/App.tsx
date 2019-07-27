import React from 'react';
import logo from './logo.svg';

import styled, { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { TriggerFunction, RenderPanel, SimpleTabs, TabPanel } from './components/SimpleTabs';
// import CheckboxTree from './components/CheckboxTree/CheckboxTree';
// import nodes from './data/nodes';

const theme = createMuiTheme();
const items = [{label : 'Item'},
              {label : 'Location'},
              {label : 'Customer'},
              {label : 'Resoruce'},
              
            ]
let handleChangeDefault : TriggerFunction;
let renderPanel: RenderPanel;

handleChangeDefault = (event: React.ChangeEvent<{}>, newValue: number) : void => {
  return console.log(newValue);

}

renderPanel = (value: any) : any => {
  return <TabPanel>Some {items[value].label}</TabPanel>
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}> 
      <div className="App">
        <Grid container spacing={0}>
          <Grid item xs={4}>
          <Paper>
            <SimpleTabs items={items} handleChange={handleChangeDefault} renderPanel={renderPanel}></SimpleTabs>   
          </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
