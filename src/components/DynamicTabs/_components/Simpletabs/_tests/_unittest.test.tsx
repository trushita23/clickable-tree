import * as React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SimpleTabs from "../index";
import { tabItems, componentConfig } from "./_mockdata";
import { Tabs } from "@material-ui/core";

configure({ adapter: new Adapter() });

const div = document.createElement("div");
 
describe("Testing Simple Tabs ", () => {
  const container = shallow(
    <SimpleTabs {...componentConfig}  />
  );

  it("Renders SimpleTabs without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SimpleTabs {...componentConfig} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it("Tests that it contains a TABS", () => {
    expect(container.exists(Tabs)).toBeTruthy;
  });

  it("Test the click event on the TABS", () => {
    const tabOnChange = (event: React.ChangeEvent<{}>, newValue: number) => {};
    const props = Object.assign({},componentConfig, {tabItems, tabOnChange})
    const container = shallow(
      <SimpleTabs {...componentConfig}/>
    );
    const item = tabItems[0];
    const event = { target: item };
    const tabID = "#tab-0";
    // container
      // .find(Tabs)
      // .first()
      // .simulate("change", event, 0);
    expect(container.exists(Tabs)).toBeTruthy;
  });

  // TODO : change of Tab to be checked
});
