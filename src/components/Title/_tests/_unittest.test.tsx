import * as React from "react";
import ReactDOM from "react-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Title from "../index";

configure({ adapter: new Adapter() });

describe("Title Component Testcases", () => {
  it("Renders Title without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Title title="View Component" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
