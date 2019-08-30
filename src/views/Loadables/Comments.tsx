import React from "react";
import Loadable from "react-loadable";
import Loading from "../../components/Loading";

export const Comments = Loadable({
  loader: () => import('../Comments'),
  loading: () => <Loading what="view"/>,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
})
