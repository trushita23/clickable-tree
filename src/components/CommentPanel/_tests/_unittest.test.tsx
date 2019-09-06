import * as React from "react";
import ReactDOM from "react-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CommentSection, { mapDispatchToProps, mapStateToProps } from "../index";
import { takeLatest } from "redux-saga/effects";
import { initialProps, Comment } from "./_mockdata";
import { createStore, IModuleStore } from "redux-dynamic-modules-core";
import { Provider } from "react-redux";
import mockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  commentDisplay,
  SET_COMMENTS,
  SET_LOADING,
  GET_COMMENTS,
  getCommentList,
  commentAsync
} from "../_redux";
const mockAxios = new mockAdapter(axios);
configure({ adapter: new Adapter() });
const store: IModuleStore<{}> = createStore({});

describe("Comment Component Testcases", () => {
  it("Renders Comment Panel without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <CommentSection {...initialProps} />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

});

//TODO:- write test cases for if condition
describe("Comment Redux Mapping functionalities", () => {
  it("Checked if the default return type is correct for state to props", () => {
    const state = {};
    const returnValue = mapStateToProps(state, initialProps);
    expect(returnValue).toEqual(initialProps);
  });

  it("Should set the URL for comment data call for dispatch to props", () => {
    const dispatch = (data: any) => data;
    const dispatchMethods = mapDispatchToProps(dispatch);
    const url = 'http://localhost:3001/jda/Comment';
    const returnValue = dispatchMethods.getCommentList(url);
    expect(returnValue.type).toEqual(GET_COMMENTS);
    expect(returnValue.url).toEqual(url);
  });
});

//TODO: Set loading in the state test.
describe("Comment Display Redux Store Testcases", () => {
  it("Should set the comments in the state", () => {
    const state = {};
    const newState = commentDisplay(state, {
      type: SET_COMMENTS,
      payload: Comment
    });
    expect(newState).toEqual({ commentList: Comment, loading: false });
  });
});

describe("Comment Display Redux Saga Testcases", () => {
  it("Should check if saga intermediary is called", () => {
    const saga = commentAsync();
    expect(saga.next().value).toEqual(takeLatest(GET_COMMENTS, getCommentList));
  });

  it("Should check if saga main is called", async () => {
    mockAxios
      .onGet("http://localhost:3001/jda/Comment")
      .reply(200, Comment);
    const generator = getCommentList({
      url: "http://localhost:3001/jda/Comment"
    });
    generator.next();
    generator.next({ response: { data: Comment } });
    expect(generator.next().done).toEqual(true);
  });
});
