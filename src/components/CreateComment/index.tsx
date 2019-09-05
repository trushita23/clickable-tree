import React, {FC} from 'react';
import {connect} from 'react-redux';
import {DynamicModuleLoader} from 'redux-dynamic-modules';

import { createCommentModule, SET_COMMENT, SET_RESOLUTION_PROS, SET_RESOLUTION_CONS, SET_SCENARIO, SET_APPROVAL, ADD_COMMENT, CLEAR_COMMENT} from './_redux';
import { AddComments, AddCommentConfig } from './_components/AddComments';
 
const ConnectCreateComment: FC<AddCommentConfig> = (props) => {
  return(
    <DynamicModuleLoader modules={[createCommentModule()]}>
      <AddComments {...props} />
    </DynamicModuleLoader>
  )
}

const mapStateToProps = (state: any) => {
  if(!state.createCommentState) {
    return {};
  }
  return state.createCommentState;
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setComment: (comment: string) => {dispatch({ type: SET_COMMENT, payload: comment })},
    setResolutionPros: (resolutionPros: string) => {dispatch({ type: SET_RESOLUTION_PROS, payload: resolutionPros })},
    setResolutionCons: (resolutionCons: string) => {dispatch({ type: SET_RESOLUTION_CONS, payload: resolutionCons })},
    setScenario: (scenario: string) => {dispatch({ type: SET_SCENARIO, payload: scenario })},
    setApproval: (approval: string) => {dispatch({ type: SET_APPROVAL, payload: approval })},
    setRating: (rating: string) => {dispatch({ type: SET_SCENARIO, payload: rating })},
    addComment: (addComment: object) => {dispatch({ type: ADD_COMMENT, payload: addComment })},
    clearComment: () => {dispatch({ type: CLEAR_COMMENT})},
  };
};
const CreateComment = connect(mapStateToProps, mapDispatchToProps)(ConnectCreateComment);

export default CreateComment;
export * from './_components/AddComments';