import * as React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CommentList } from "../../CommentList";
import { initialProps } from "../../../_tests/_mockdata";
configure({ adapter: new Adapter() });

describe("Testing Comment List Rendering", () => {
  it("renders Comment List without crashing", () => {
    const table = document.createElement("table");
    ReactDOM.render(<CommentList {...initialProps}/>, table);
    ReactDOM.unmountComponentAtNode(table);
  });
  
  // it("Check for Dynamic Tabs", () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find(DynamicTabs).length).toBeGreaterThan(0);
  // });
});

//TODO: To add custom action for save, publish and share.