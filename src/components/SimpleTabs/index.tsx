import React from 'react';
import {Tabs, Tab, Paper} from '@material-ui/core';

import { forEach } from 'lodash';
import { TabItem, TabProps, TriggerFunction } from './_dataTypes';
import { a11yProps } from './_utils';
//import { TabPanel } from './_components/TabPanel';
import { useFetch } from '../../hooks';
import CheckBoxTreeView from '../CheckboxTreeview'

interface TabPanelProps {
  value: string|number;
}
const GetTabPanel: React.FC<TabPanelProps> = (props) => {

  //const [tabValue, setTabValue] = useState(props.value);
  const [tabItems, Loading] = useFetch(`http://localhost:3001/jda/tabs/${props.value}`,[{label:"", value:""}])

  if(Loading) {
    return <Paper>"Loading..."</Paper>;
  } else {
    return <CheckBoxTreeView items={tabItems}></CheckBoxTreeView>
  }
}

export const SimpleTabs : React.FC<TabProps> = (props) => {

  const [value, setValue] = React.useState<string|number>(0);
  const [tabValue, setTabValue] = React.useState<string|number>(props.items[0].value);
  const tabs: Array<any> = [];
  forEach(props.items, (item: TabItem,key: number) =>  tabs.push(<Tab key={`tab-${item.label}`} label={item.label} {...a11yProps(key, item.a11y)}></Tab>));
  
  const handleChangeDefault : TriggerFunction = (event: React.ChangeEvent<{}>, newValue: number) => {

    setValue(newValue);
    setTabValue(props.items[newValue].value);
    if(props.handleChange !== undefined) {
      props.handleChange(event, newValue);
    }
  }

  return (
    <React.Fragment>
        <Tabs value={value} onChange={handleChangeDefault} aria-label="simple tabs example" variant="scrollable"
          scrollButtons="auto">
          {tabs}
        </Tabs>
        {tabValue ? <GetTabPanel value={tabValue}/> : ""}
    </React.Fragment>
  );
}

export * from './_dataTypes';
export * from './_components/TabPanel';