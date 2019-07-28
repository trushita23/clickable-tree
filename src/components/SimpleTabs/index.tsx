import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { forEach } from 'lodash';
import { TabItem, TabProps, TriggerFunction, RenderPanel } from './_dataTypes';
import { a11yProps } from './_utils';
import { TabPanel } from './_components/TabPanel';


export const SimpleTabs : React.FC<TabProps> = (props) => {
  
  const [value, setValue] = React.useState(0);
  const tabs: Array<any> = [];
  forEach(props.items, (item: TabItem,key: number) =>  tabs.push(<Tab key={`tab-${item.label}`} label={item.label} {...a11yProps(key, item.a11y)}></Tab>));
  
  const handleChangeDefault : TriggerFunction = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    if(props.handleChange !== undefined) {
      props.handleChange(event, newValue);
    }
  }

  const renderPanelDefault: RenderPanel = () => {
    if(props.renderPanel !== undefined) {
      return props.renderPanel(value);
    } else {
      return (<TabPanel>
        Item {props.items[value].label}
      </TabPanel>);
    }
  }

  return (
    <React.Fragment>
        <Tabs value={value} onChange={handleChangeDefault} aria-label="simple tabs example" variant="scrollable"
          scrollButtons="auto">
          {tabs}
        </Tabs>
      {renderPanelDefault()}
    </React.Fragment>
  );
}

export * from './_dataTypes';
export * from './_components/TabPanel';