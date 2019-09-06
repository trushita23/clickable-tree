import React, { FC } from "react";
import { CommentsProps } from "./_datatypes";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { connect } from "react-redux";
import { getCommentModule, GET_COMMENTS } from "./_redux";
import { CommentBox } from "./_components/CommentBox";
//import {http} from '../../config/http';
//import { commentPanelProps} from '../../config/index';

const ConnectedComment: FC<CommentsProps> = props => {
  if (props.commentList.length === 0 && props.commentUrl) {
    props.getCommentList(props.commentUrl);
  }
  return (
    <DynamicModuleLoader modules={[getCommentModule()]}>
      <CommentBox {...props} />
    </DynamicModuleLoader>
  );
};

export const mapStateToProps = (state: any, ownProps: CommentsProps) => {
  if (!state.commentState) {
    return ownProps;
  }
  return state.commentState;
};

export const mapDispatchToProps = (dispatch: Function) => {
  return {
    getCommentList: (url: string) => {
      return dispatch({ type: GET_COMMENTS, url });
    }
  };
};
const CommentSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedComment);

export default CommentSection;
export * from "./_datatypes";
