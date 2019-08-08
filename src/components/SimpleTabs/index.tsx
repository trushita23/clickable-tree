import React from 'react';
import {Tabs, Tab, Paper, Typography, LinearProgress, MuiThemeProvider} from '@material-ui/core';
import { forEach, omit } from 'lodash';
import { TabItem, TabProps, TriggerFunction, CheckBoxTreeViewConfig } from './_dataTypes';
import { a11yProps } from './_utils';
import { TabPanel } from './_components/TabPanel';
import { useFetch } from '../../hooks';
import {makeStyles, createStyles, Theme} from  '@material-ui/core';
import theme from '../../theme/muiTheme'
const secondaryColor: string = theme.palette.secondary.main;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        spaced: {
            padding: theme.spacing(2),
            fontWeight: 'bold',
        },
        zeroIndicator: {
          height: 0
        }
    }),
);



export const DynamicTabs: React.FC<CheckBoxTreeViewConfig> = (props) =>{
  const [items, loading] = useFetch(props.tabsUrl,[{label:"", value:""}]);
  if(loading) {
    return <Paper>"Loading..."<LinearProgress /></Paper>;
  } else {
    return (<SimpleTabs items={items} {...omit(props, 'tabsUrl')}></SimpleTabs>)
  }
  
}

export const SimpleTabs : React.FC<TabProps> = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<string|number>(0);
  const [tabValue, setTabValue] = React.useState<string|number>(props.items[0].value);
  const tabs: Array<any> = [];
  forEach(props.items, (item: TabItem,key: number) =>  tabs.push(<Tab key={`tab-${item.label}`} style={{zIndex:1000}} label={item.label} {...a11yProps(key, item.a11y)}></Tab>));
  
  const handleChangeDefault : TriggerFunction = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    setTabValue(props.items[newValue].value);
    if(props.tabOnChange !== undefined) {
      props.tabOnChange(event, newValue);
    }
  }
  theme.palette.secondary.main = "#FFFFFF";
  return (
    <React.Fragment>
        {props.title && <Typography variant="body1" className={classes.spaced}>{props.title}</Typography>}
        <MuiThemeProvider theme={theme}>
          <Tabs indicatorColor='secondary' value={value} onChange={handleChangeDefault} aria-label="simple tabs example" variant="scrollable"
            scrollButtons="auto">
            {tabs}
          </Tabs>
        </MuiThemeProvider>
        {tabValue ? <TabPanel secondaryColor={secondaryColor} value={tabValue} {...omit(props, ['title','items','tabsUrl','tabOnChange'])}/> : ""}
    </React.Fragment>
  );
}

export * from './_dataTypes';
export * from './_components/TabPanel';