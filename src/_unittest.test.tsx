import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DynamicTabs from "./components/DynamicTabs";

configure({ adapter: new Adapter() });

describe.only("Testing App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Check for Dynamic Tabs", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(DynamicTabs).length).toBeGreaterThan(0);
  });
});
