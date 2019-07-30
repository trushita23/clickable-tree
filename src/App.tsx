import React from 'react';
import { ThemeProvider } from "styled-components";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";



import { TriggerFunction, RenderPanel, SimpleTabs, TabPanel } from './components/SimpleTabs';
//import CheckBoxTreeView from './components/CheckboxTreeview';
import { useFetch } from './hooks';

const styles = {
    root: {
      // Style sheet name ⚛️
      MuiPaper: {
        // Name of the rule
        root: {
          // Some CSS
          color: 'rgb(1,0,0,1)',
        },
      }
  }
};

const theme = createMuiTheme();

const items = [{label : 'Item'},
              {label : 'Location'},
              {label : 'Customer'},
              {label : 'Resoruce'},
              
            ]
let handleChangeDefault : TriggerFunction;
let renderPanel: RenderPanel;

handleChangeDefault = (event: React.ChangeEvent<{}>, newValue: string|number) : void => {
  return console.log(newValue);
}

renderPanel = (value: any) : any => {
  return <TabPanel>Some {items[value].label}</TabPanel>
}


const GetTabs: React.FC = () =>{
  
  const [items, loading] = useFetch("http://localhost:3001/jda/tabs",[{label:"", value:""}]);
  if(loading) {
    return <Paper>"Loading..."</Paper>;
  } else {
    return (<SimpleTabs items={items} handleChange={handleChangeDefault} renderPanel={renderPanel}></SimpleTabs>)
  }
  
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}> 
      <div className="App">
        <Grid container spacing={0}>
          <Grid item xs={4}>
          <Paper>
               <GetTabs>Loading..</GetTabs>
          </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
