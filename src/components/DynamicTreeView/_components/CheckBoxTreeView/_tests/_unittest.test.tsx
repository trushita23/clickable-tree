import * as React from "react";
import ReactDOM from "react-dom";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CheckBoxList from "../index";
import { Typography } from "@material-ui/core";
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
    expect(container.find("#search-string").exists()).toBe(true);
  });

  it("Should render search textfield with props", () => {
    expect(container.find("#search-string").props()).toMatchObject({
      id: "search-string",
      label: "Search",
      value: "um",
      margin: "dense"
    });
  });
  it("adds custom action for update button the update button", () => {
    const updateButtonAction = jest.fn();
    const props = Object.assign({}, initialProps, {
      updateButtonAction: updateButtonAction
    });
    const container = mount(<CheckBoxList {...props} />);
    const button = container.find("#update-view").first();
    button.simulate("click", { target: { value: "India" } });
    expect(updateButtonAction).toBeCalled();
  });

  it("Should initialize the search String", () => {
    const props = Object.assign({}, initialProps, { searchString: "India" });
    const container = shallow(<CheckBoxList {...props} />);
    container.find("#search-string").simulate("change", {
      target: {
        value: "India"
      }
    });
    expect(container.find("#search-string").prop("value")).toEqual("India");
  });

  it("Should  select all Items", () => {
    const props = Object.assign({}, initialProps, {
      checkedItems: [],
      collapsibelTreeView: true
    });
    const container = mount(<CheckBoxList {...props} />);
    const count = container.find({ type: "checkbox" }).length;
    const target = container.find({ type: "checkbox" }).first();

    target.simulate("click");
    expect(container.find({ type: "checkbox" }).length).toEqual(count);
  });

  it("Should  deselect all Items", () => {
    const props = Object.assign({}, initialProps, {
      checkedItems: ["all"],
      collapsibelTreeView: true
    });
    const container = mount(<CheckBoxList {...props} />);
    const count = container.find({ type: "checkbox" }).length;
    const target = container.find({ type: "checkbox" }).first();

    target.simulate("click");
    expect(container.find({ type: "checkbox" }).length).toEqual(count);
  });

  

  it("Should select Items", () => {
    const props = Object.assign({}, initialProps, {
      checkedItems: [],
      collapsibelTreeView: true
    });
    const container = mount(<CheckBoxList {...props} />);
    const count = container.find({ type: "checkbox" }).length;
    const target = container.find({ type: "checkbox" }).last();

    target.simulate("click");
    expect(container.find({ type: "checkbox" }).length).toEqual(count);
  });

  it("Should select Child Items", () => {
    const props = Object.assign({}, initialProps, {
      checkedItems: [],
      collapsibelTreeView: true
    });
    const container = mount(<CheckBoxList {...props} />);
    const count = container.find({ type: "checkbox" }).length;
    const target = container.find({ type: "checkbox" }).at(7);

    target.simulate("click");
    expect(container.find({ type: "checkbox" }).length).toEqual(count);
  });

  it("Should deselect Child Items", () => {
    const props = Object.assign({}, initialProps, {
      checkedItems: ['India','Maharastra','Mumbai'],
      collapsibelTreeView: true
    });
    const container = mount(<CheckBoxList {...props} />);
    const count = container.find({ type: "checkbox" }).length;
    const target = container.find({ type: "checkbox" }).at(7);

    target.simulate("click");
    expect(container.find({ type: "checkbox" }).length).toEqual(count);
  });

  it("Should  deselect Items", () => {
    const props = Object.assign({}, initialProps, {
      checkedItems: ["India", "Maharastra", "Mumbai"],
      collapsibelTreeView: true
    });
    const container = mount(<CheckBoxList {...props} />);
    const count = container.find({ type: "checkbox" }).length;
    const target = container.find({ type: "checkbox" }).last();

    target.simulate("click");
    expect(container.find({ type: "checkbox" }).length).toEqual(count);
  });  
  it("Should mark an Item as Open", () => {
    const props = Object.assign({}, initialProps, {
      checkedItems: ["Australia", "Victoria"],
      collapsibelTreeView: true
    });
    const container = mount(<CheckBoxList {...props} />);
    const count = container.find({ type: "checkbox" }).length;
    container
      .find({ id: "ico-collapse-India" })
      .first()
      .simulate("click");
    expect(container.find({ type: "checkbox" }).length).toEqual(count);
    container
      .find({ id: "ico-collapse-India" })
      .first()
      .simulate("click");
    expect(container.find({ type: "checkbox" }).length).toEqual(count);
  });

  // it("Should initialize the selectedTab", () => {
  //   const props = Object.assign({}, initialProps, {selectedTab : "Location"});
  //   const container = shallow(<CheckBoxList {...props} />);
  //   expect(container.find("#search-string").prop("value")).toEqual("India");
  // });
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
