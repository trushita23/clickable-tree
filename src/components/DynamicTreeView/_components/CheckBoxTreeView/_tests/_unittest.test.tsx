import * as React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CheckBoxList from "./index";
import { Typography } from "@material-ui/core";
import { parseInt } from "lodash";
import { initialProps } from "./_mockdata";

configure({ adapter: new Adapter() });

describe("CollapsibleListWithCheckBox Component Testcases", () => {
  const container = shallow(<CheckBoxList {...initialProps} />);
  it("Renders CheckBoxList without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CheckBoxList {...initialProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render Typography if exists once", () => {
    expect(container.find(Typography).length).toBeGreaterThanOrEqual(1);
  });

  it("should render Search TextField if exists", () => {
    expect(container.find("#standard-name").exists()).toBe(true);
  });

  it("should render search textfield with props", () => {
    expect(container.find("#standard-name").props()).toMatchObject({
      id: "standard-name",
      label: "Search",
      value: "",
      margin: "dense"
    });
  });

  it("should set the search value on change event", () => {
    container.find("#standard-name").simulate("change", {
      target: {
        value: "India"
      }
    });
    expect(container.find("#standard-name").prop("value")).toEqual("India");
  });
  // TODO: Tree view is populated
  // TODO: clicking the checkbox selects the item
  // TODO: If the checkbox is already selceted the click should uncheck item
  // TODO: click event on child selects all the parent
  // TODO: click event on parent selects all the children
  // TODO: click on All selects all
  // TODO: click on All when it is already selected clears all
  // TODO: Searching an Item should highlight the item
  // TODO: Searching an Item should filter out the items
});
