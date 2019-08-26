import * as React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { tabItems, componentConfig } from "./_mockdata";
import { Tabs } from "@material-ui/core";
import { omit } from "lodash";

configure({ adapter: new Adapter() });