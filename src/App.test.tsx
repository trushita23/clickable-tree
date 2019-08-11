import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {DynamicTabs } from './components/SimpleTabs';
// import { tabItems } from '../__mocks__/tabItems'

configure({ adapter: new Adapter()});
const componenConfig = {
  title: "View Controller",
  tabsUrl : "http://localhost:3001/jda/tabs",
  tabPanelUrl : "http://localhost:3001/jda/tabs", // tab value gets appended to this URL
  collapsibelTreeView: false,
  showSelectAll :true,
}

describe('Testing App', () =>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Check for Dynamic Tabs', () => {
    const wrapper = shallow(<App />);
    //const paper = <DynamicTabs {...componenConfig}>Loading..</DynamicTabs>
    //const text = wrapper.find('DynamicTabs').text()
    expect(wrapper.find(DynamicTabs).length).toBeGreaterThan(0);
  });
});