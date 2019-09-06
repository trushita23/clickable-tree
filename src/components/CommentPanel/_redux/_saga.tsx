import { call, put, takeLatest } from "redux-saga/effects";
import { SET_COMMENTS, GET_COMMENTS } from "./_actions";
import axios from 'axios';


export function* getCommentList(action: any) {
  if (action) {
    const response = yield call(axios.get, action.url);
    yield put({ type: SET_COMMENTS, payload: response.data });
  } else {
    yield put({ type: SET_COMMENTS, payload: [] });
   }
}

export function* commentAsync() {
  yield takeLatest(GET_COMMENTS, getCommentList);
}
