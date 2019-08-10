import * as React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { TabPanel } from './index';
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
  it('Renders TabPanel without Crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TabPanel secondaryColor={"#000000"} value={"testsuite"} {...omit(componenConfig, ['title','items','tabsUrl','tabOnChange'])}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});