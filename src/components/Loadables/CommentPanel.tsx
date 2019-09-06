import React from "react";
import Loadable from "react-loadable";
import Loading from "../Loading";

export const CommentPanel = Loadable({
  loader: () => import('../CommentPanel'),
  loading: () => <Loading what="Component"/>,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
})
