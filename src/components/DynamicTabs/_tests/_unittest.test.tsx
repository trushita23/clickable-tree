import * as React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux-dynamic-modules";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';
import DynamicTabs, { mapDispatchToProps, mapStateToProps } from "../index";
import { tabItems, componentConfig } from "./_mockdata";
import { Provider } from "react-redux";
import {
  tabTransition,
  SET_TAB_INDEX,
  SET_TAB_VALUE,
  SET_ITEMS,
  SET_LOADING,
  GET_ITEMS,
  getTabList,
  tabTransitionAsync
} from "../_redux";
import { takeLatest } from "redux-saga/effects";

configure({ adapter: new Adapter() });
const store = createStore({});

const div = document.createElement("div");
const component = (props: any) => (
  <Provider store={store}>
    <DynamicTabs {...props} />
  </Provider>
);
const mockAxios = new mockAdapter(axios);
describe("Testing Dynamic Tabs ", () => {
  const container = mount(component(componentConfig));

  it("Renders Dynamic Tabs without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(component(componentConfig), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Tests that it components displays Loading", () => {
    expect(container.find("Loading").length).toBeGreaterThanOrEqual(1);
  });

  it("Test the mapStatetoProps for empty state", () => {
    const state = {};
    const returnValue = mapStateToProps(state);
    expect(returnValue).toEqual({});
  });

  it("Test the mapDispatchtoProps has all the methods", () => {
    const state = { tabState: { tabID: 0, tabValue: "Country" } };
    const mockDispatch = (data: any) => {
      return data;
    };
    const returnValue = mapDispatchToProps(mockDispatch);
    expect(returnValue.setTabIndex(0)).toEqual({
      type: "SET_TAB_INDEX",
      payload: 0
    });
    expect(returnValue.setTabValue("Country")).toEqual({
      type: "SET_TAB_VALUE",
      payload: "Country"
    });
  });

  it("Test the mapStatetoProps for set state", () => {
    const state = { tabState: { tabID: 0, tabValue: "Country" } };
    const returnValue = mapStateToProps(state);
    expect(returnValue).toEqual({ tabID: 0, tabValue: "Country" });
  });
});

describe("Testing Dynamic Tabs Reducers ", () => {
  const container = mount(component(componentConfig));
  // SET_TAB_INDEX, SET_TAB_VALUE, SET_ITEMS, SET_LOADING
  it("Test that the Tab Index is set", () => {
    const state = {};
    const returnValue = tabTransition(state, {
      type: SET_TAB_INDEX,
      payload: 0
    });
    expect(returnValue).toEqual({ tabIndex: 0 });
  });

  it("Test that the Tab Value is set", () => {
    const state = {};
    const returnValue = tabTransition(state, {
      type: SET_TAB_VALUE,
      payload: "Country"
    });
    expect(returnValue).toEqual({ tabValue: "Country" });
  });

  it("Test that the Tab Items are set", () => {
    const state = {};
    const returnValue = tabTransition(state, {
      type: SET_ITEMS,
      payload: tabItems
    });
    expect(returnValue).toEqual({
      tabItems: tabItems,
      loading: false,
      tabIndex: 0,
      tabValue: "Country"
    });
  });

  it("Test that the loading is toggled", () => {
    const state = {};
    const returnValue = tabTransition(state, {
      type: SET_LOADING,
      payload: true
    });
    expect(returnValue).toEqual({ loading: true });
  });

  it("Should check if saga intermediary is called", () => {
    const saga = tabTransitionAsync();
    expect(saga.next().value).toEqual(takeLatest(GET_ITEMS, getTabList));
  });

  it("Should check if saga main is called", async () => {
    mockAxios.onGet("http://localhost:3001/jda/tabs").reply(200, tabItems);
    const generator = getTabList({ url: "http://localhost:3001/jda/tabs" });

    generator.next();
    generator.next({response: {data: tabItems}});
    expect(generator.next().done).toEqual(true);
  });
});
