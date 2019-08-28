import { call, put, takeLatest } from "redux-saga/effects";
import { SET_COMMENTS, GET_COMMENTS } from "./_actions";

export function* getCommentList(action: any) {
  if (action) {
    const response = yield call(fetch, action.url);
    const json = yield call([response, response.json]);
    yield put({ type: SET_COMMENTS, payload: json });
  } else {
    yield put({ type: SET_COMMENTS, payload: [] });
   }
}

export function* commentAsync() {
  yield takeLatest(GET_COMMENTS, getCommentList);
}
