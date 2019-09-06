import * as React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CommentBox } from "../../CommentBox";
import { initialProps } from "../../../_tests/_mockdata";
import { Button } from "@material-ui/core";

configure({ adapter: new Adapter() });

describe("Testing Comment Box Rendering", () => {
  const wrapper = shallow(<CommentBox {...initialProps} />);
  it("renders Comment Box without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CommentBox {...initialProps}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it("Should render three buttons", () => {
    expect(wrapper.find(Button)).toHaveLength(3);
  });
});

describe('Comment Buttons interaction', () => {
  const wrapper = shallow(<CommentBox {...initialProps} />);
  it('should call the onClick function when \'Save\' button  is clicked', () => {
    const saveButtonAction = jest.fn();
    const props = Object.assign({}, initialProps, {
      saveButtonAction: saveButtonAction
    });
      wrapper.find(Button).at(0).simulate('click');
     expect(saveButtonAction).toHaveBeenCalledTimes(1);
  });
  it('should call the onClick function when \'Save\' button  is clicked', () => {
    const shareButtonAction = jest.fn();
    const props = Object.assign({}, initialProps, {
      shareButtonAction: shareButtonAction
    });
      wrapper.find(Button).at(0).simulate('click');
     expect(shareButtonAction).toHaveBeenCalledTimes(1);
  });
  it('should call the onClick function when \'Save\' button  is clicked', () => {
    const publishButtonAction = jest.fn();
    const props = Object.assign({}, initialProps, {
      saveButtopublishButtonAction: publishButtonAction
    });
      wrapper.find(Button).at(0).simulate('click');
     expect(publishButtonAction).toHaveBeenCalledTimes(1);
  });
});

//TODO: To add custom action for save publish and share.