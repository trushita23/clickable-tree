import * as React from "react";
import ReactDOM from "react-dom";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SimpleTabs from "../index";
import { tabItems, componentConfig } from "./_mockdata";
import { Tabs, Tab } from "@material-ui/core";

configure({ adapter: new Adapter() });

const div = document.createElement("div");
 
describe("Testing Simple Tabs ", () => {
 

  it("Renders SimpleTabs without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SimpleTabs {...componentConfig} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it("Tests shows Loading", () => {
    const container = shallow(
      <SimpleTabs {...componentConfig}  />
    );
    expect(container.find('Loading').length).toBeGreaterThanOrEqual(1);
  });
  it("Tests shows Tabs", () => {
    const props = Object.assign({}, componentConfig, {tabItems: tabItems, loading: false})
    
    const container = mount(
      <SimpleTabs {...props}  />
    );
    expect(container.find(Tabs).length).toBeGreaterThanOrEqual(1);
  });

  it("Tests changing tabs", () => {
    const props = Object.assign({}, componentConfig, {tabItems: tabItems, loading: false})
    
    const container = mount(
      <SimpleTabs {...props}  />
    );
    const tabs = container.find(Tab);
    tabs.first().simulate('click', {target: {value: 'Location'}}, 0);
    expect(container.find(Tab).length).toBeGreaterThanOrEqual(tabItems.length);
  });
  // TODO : change of Tab to be checked
});
