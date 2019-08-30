import React from "react";
import Loadable from "react-loadable";
import Loading from "../Loading";

export const DynamicTreeView = Loadable({
  loader: () => import('../DynamicTreeView'),
  loading: () => <Loading what="Component"/>,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
})
