import * as React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {DynamicTabs, SimpleTabs } from './index';
import { tabItems } from '../../../__mocks__/tabItems';
import {Tabs, Paper, LinearProgress, Tab} from '@material-ui/core'
import {omit} from 'lodash';
import * as hooks from '../../hooks';

//jest.mock('../../hooks');
configure({ adapter: new Adapter()});
const componenConfig = {
  title: "View Controller",
  tabsUrl : "http://localhost:3001/jda/tabs",
  tabPanelUrl : "http://localhost:3001/jda/tabs", // tab value gets appended to this URL
  collapsibelTreeView: false,
  showSelectAll :true,
}
const div = document.createElement('div');
describe('Testing Dynamic Tabs ', () =>{
  it('Renders Dynamic Tabs without Crashing', () => {    
    ReactDOM.render(<DynamicTabs {...componenConfig}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  const container = shallow(<DynamicTabs {...componenConfig}>Loading..</DynamicTabs>);
  it('Render Loading because items data is yet to be loaded', () => {
    expect(container.find(LinearProgress).length).toBeGreaterThan(0);
  })

  it('Render Simpletabs as items data is loaded', () => {    
    jest.spyOn(hooks, 'useFetch').mockImplementation((url:string, def:any) =>{console.log("CAlled"); return [tabItems, false]});
    const container = shallow(<DynamicTabs {...componenConfig}>Loading..</DynamicTabs>);
    expect(container.find(SimpleTabs).length).toBeGreaterThan(0);
  })
})

describe('Testing Simple Tabs ', () =>{
  it('Renders Simple Tabs without Crashing', () => {
    ReactDOM.render(<SimpleTabs items={tabItems} {...omit(componenConfig, 'tabsUrl')}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  const container = shallow(<SimpleTabs items={tabItems} {...omit(componenConfig, 'tabsUrl')}/>);
  it('Tests that it contains a TABS', () => {
    expect(container.exists(Tabs)).toBeTruthy; 
  })
  
  it('Test the click event on the TABS', () => {
    const tabOnChange = (event: React.ChangeEvent<{}>, newValue: number) => {}
    const container = shallow(<SimpleTabs items={tabItems} {...omit(componenConfig, 'tabsUrl')} tabOnChange={tabOnChange}/>);
    const item = tabItems[0];
    const event = {target: item};
    const tabID = '#tab-0';
    container.find(Tabs).first().simulate('change', event, 0);
    expect(container.exists(Tabs)).toBeTruthy;
  })
  
  // @TODO : change of Tab to be checked  
});