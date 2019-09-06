import * as React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Comment } from "../../Comment";
import { initialProps } from "./_mockdata";
configure({ adapter: new Adapter() });

describe("Testing Comment List Rendering", () => {
  it("renders Comment List without crashing", () => {
    const tbody = document.createElement("tbody");
    ReactDOM.render(<Comment {...initialProps}/>, tbody);
    ReactDOM.unmountComponentAtNode(tbody);
  });
});

