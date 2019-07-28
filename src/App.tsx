import React from 'react';
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { TriggerFunction, RenderPanel, SimpleTabs, TabPanel } from './components/SimpleTabs';
import CheckBoxTreeView from './components/CheckboxTreeview';

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
          <Grid item xs={4}>
          <Paper>
            <CheckBoxTreeView></CheckBoxTreeView>
          </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
