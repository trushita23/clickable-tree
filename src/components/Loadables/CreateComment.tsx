import React from "react";
import Loadable from "react-loadable";
import Loading from "../Loading";

export const CreateComment = Loadable({
  loader: () => import('../CreateComment'),
  loading: () => <Loading what="Component"/>,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
})
