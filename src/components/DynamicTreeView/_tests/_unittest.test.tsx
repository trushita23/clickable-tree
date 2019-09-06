import * as React from "react";
import ReactDOM from "react-dom";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DynamicTreeView, { mapDispatchToProps, mapStateToProps } from "../index";
import { DynamicTreeViewConfig } from "../_dataTypes";
import { takeLatest } from "redux-saga/effects";
import { initialProps, Country } from "./_mockdata";
import { createStore, IModuleStore } from "redux-dynamic-modules-core";
import { Provider } from "react-redux";
import mockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  checkboxChecked,
  SET_ITEMS,
  SET_LOADING,
  SET_CHECKED,
  SET_SEARCH,
  SET_OPEN,
  SET_SELECETED_TAB,
  loadChecklist,
  getTreeItems,
  GET_ITEMS
} from "../_redux";
import { tabItems } from "../../DynamicTabs/_components/Simpletabs/_tests/_mockdata";
const mockAxios = new mockAdapter(axios);
configure({ adapter: new Adapter() });
const store: IModuleStore<{}> = createStore({});

describe("Dynamic Tree View Component Testcases", () => {
  it("Renders Dynamic Tree View without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <DynamicTreeView {...initialProps} />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it("Makes a call to set the changed selectedTab method", () => {
    const div = document.createElement("div");
    const props = Object.assign({}, initialProps, {selectedTab:"Country", tabChanged: true})
    const container = mount(<Provider store={store}>
        <DynamicTreeView {...props} />
      </Provider>);
    expect(container.find('ConnectedTreeView').length).toBeGreaterThanOrEqual(1);  
});

});

describe("Dynamic Tabs Redux Mapping functionalities", () => {
  it("Checked if the default returned type is correct for state to props", () => {
    const state = {};
    const returnValue = mapStateToProps(state, initialProps);
    expect(returnValue).toEqual(initialProps);
  });

  it("Checked if the empty is returned for state to props", () => {
    const state = {
      treeviewState: { selectedTab: "Country" },
      tabState: { tabValue: "Country" }
    };
    const returnValue = mapStateToProps(state, initialProps);
    expect(returnValue).toEqual(initialProps);
  });

  it("Checked if the tabstate is set to true for state to props", () => {
    const state = {
      treeviewState: { selectedTab: "Country" },
      tabState: { tabValue: "Location" }
    };
    const returnValue = mapStateToProps(state, initialProps);
    
    expect(returnValue.tabChanged).toEqual(true);
    expect(returnValue.selectedTab).toEqual("Location");
  });

  

  it("Checked checkedItems are set for dispatch to props", () => {
    const dispatch = (data: any) => data;
    const dispatchMethods = mapDispatchToProps(dispatch);
    const checkedItems = ["India", "Punjab", "Bathinda", "Maharastra","Mumbai"];
    const returnValue = dispatchMethods.setChecked(checkedItems)
    expect(returnValue.type).toEqual(SET_CHECKED);
    expect(returnValue.payload).toEqual(checkedItems);
  });

  it("Checked Open Items are set for dispatch to props", () => {
    const dispatch = (data: any) => data;
    const dispatchMethods = mapDispatchToProps(dispatch);
    const checkedItems = ["India", "Punjab", "Bathinda", "Maharastra","Mumbai"];
    const returnValue = dispatchMethods.setOpen(checkedItems)
    expect(returnValue.type).toEqual(SET_OPEN);
    expect(returnValue.payload).toEqual(checkedItems);
  });

  it("Checked Search String is set for dispatch to props", () => {
    const dispatch = (data: any) => data;
    const dispatchMethods = mapDispatchToProps(dispatch);
    const searchString = 'India';
    const returnValue = dispatchMethods.setSearch(searchString)
    expect(returnValue.type).toEqual(SET_SEARCH);
    expect(returnValue.payload).toEqual(searchString);
  });

  it("Checked Selected Tab is set for dispatch to props", () => {
    const dispatch = (data: any) => data;
    const dispatchMethods = mapDispatchToProps(dispatch);
    const selectedTab = 'Location';
    const returnValue = dispatchMethods.setSelectedTab(selectedTab)
    expect(returnValue.type).toEqual(SET_SELECETED_TAB);
    expect(returnValue.payload).toEqual(selectedTab);
  });

  it("Checked Url is set for getTree data callfor dispatch to props", () => {
    const dispatch = (data: any) => data;
    const dispatchMethods = mapDispatchToProps(dispatch);
    const url = 'http://localhost:3001/jda/tabs/Country';
    const tab = "Country"
    const returnValue = dispatchMethods.getTreeData(url, tab)
    expect(returnValue.type).toEqual(GET_ITEMS);
    expect(returnValue.url).toEqual(url);
  });
});
describe("Dynamic Tree Redux Store Testcases", () => {
  it("Should set the Items in the state", () => {
    const state = {};
    const newState = checkboxChecked(state, {
      type: SET_ITEMS,
      payload: tabItems
    });
    expect(newState).toEqual({ treeItems: tabItems, loading: false });
  });

  it("Should set loading in the state", () => {
    const state = {};
    const newState = checkboxChecked(state, {
      type: SET_LOADING,
      payload: true
    });
    expect(newState).toEqual({ loading: true });
  });

  it("Should set Checked in the state", () => {
    const state = { checkedStatus: false };
    const newState = checkboxChecked(state, {
      type: SET_CHECKED,
      payload: ["India", "Maharastra"]
    });
    expect(newState).toEqual({
      checkedItems: ["India", "Maharastra"],
      checkedStatus: true
    });
  });

  it("Should set Serach String in the state", () => {
    const state = {};
    const newState = checkboxChecked(state, {
      type: SET_SEARCH,
      payload: "India"
    });
    expect(newState).toEqual({ searchString: "India" });
  });

  it("Should set Open in the state", () => {
    const state = { checkedStatus: false };
    const newState = checkboxChecked(state, {
      type: SET_OPEN,
      payload: ["India", "Maharastra"]
    });
    expect(newState).toEqual({
      openItems: ["India", "Maharastra"],
      checkedStatus: true
    });
  });

  it("Should set Search String in the state", () => {
    const state = {};
    const newState = checkboxChecked(state, {
      type: SET_SELECETED_TAB,
      payload: "Location"
    });
    expect(newState).toEqual({ selectedTab: "Location" });
  });

  it("Should check if saga intermediary is called", () => {
    const saga = loadChecklist();
    expect(saga.next().value).toEqual(takeLatest(GET_ITEMS, getTreeItems));
  });

  it("Should check if saga main is called", async () => {
    mockAxios
      .onGet("http://localhost:3001/jda/tabs/Country")
      .reply(200, Country);
    const generator = getTreeItems({
      url: "http://localhost:3001/jda/tabs/Country"
    });
    generator.next();
    generator.next({ response: { data: Country } });
    expect(generator.next().done).toEqual(true);
  });
});
