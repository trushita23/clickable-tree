import React from "react";
import Loadable from "react-loadable";
import Loading from "../Loading";

export const Title = Loadable({
  loader: () => import('../Title'),
  loading: () => <Loading what="Component"/>,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
})