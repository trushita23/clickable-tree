import * as React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DynamicTreeView from "../index";
import { takeLatest } from "redux-saga/effects";
import { initialProps } from "./_mockdata";
import { createStore, IModuleStore } from "redux-dynamic-modules-core";
import { Provider } from "react-redux";
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
});

describe("Dynamic Tree Redux Store Testcases", () => {
  it("Should set the Items in the state", () => {
    const state = {};
    const newState = checkboxChecked(state, {
      type: SET_ITEMS,
      payload: tabItems
    });
    expect(newState).toEqual({ treeItems: tabItems });
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

  it("Should set Serach String in the state", () => {
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

  // it("Should check if saga Function is called", () => {
  //   const mockJsonPromise = Promise.resolve(tabItems); // 2
  //   const mockFetchPromise = Promise.resolve({
  //     // 3
  //     json: () => mockJsonPromise
  //   });
  //   //global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  //   jest.spyOn(axios, "get").mockImplementation((url: string, def: any) => {
  //     console.log("CAlled", url, def);
  //     return [tabItems, false];
  //   });
  //   const saga = getTreeItems({url:'http:/getsomething.com/data'});
  //   console.log(saga);
  // });
});
