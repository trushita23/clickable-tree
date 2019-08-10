import * as React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {DynamicTabs, SimpleTabs } from './index';
import { tabItems } from '../../../__mocks__/tabItems';
import {omit} from 'lodash';

configure({ adapter: new Adapter()});
const componenConfig = {
  title: "View Controller",
  tabsUrl : "http://localhost:3001/jda/tabs",
  tabPanelUrl : "http://localhost:3001/jda/tabs", // tab value gets appended to this URL
  collapsibelTreeView: false,
  showSelectAll :true,
}

describe('Testing SimpleTabs ', () =>{
  it('Renders Simple Tabs without Crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SimpleTabs items={tabItems} {...omit(componenConfig, 'tabsUrl')}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders Dynamic Tabs without Crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DynamicTabs {...componenConfig}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});