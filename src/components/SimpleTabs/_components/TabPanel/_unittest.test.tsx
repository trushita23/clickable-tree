import * as React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { TabPanel } from "./index";
import { omit } from "lodash";
import { componentConfig } from '../../_mockdata'
configure({ adapter: new Adapter() });


describe("Testing SimpleTabs ", () => {
  it("Renders TabPanel without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <TabPanel
        secondaryColor={"#000000"}
        value={"testsuite"}
        {...omit(componentConfig, ["title", "items", "tabsUrl", "tabOnChange"])}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
