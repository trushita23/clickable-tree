import { call, put, takeLatest, all } from "redux-saga/effects";
import { SET_ITEMS, GET_ITEMS, SET_LOADING } from "./_actions";

export function* getTreeItems(action: any) {
  if (action) {
    const response = yield call(fetch, action.url);
    const json = yield call([response, response.json]);
    yield all([
      put({ type: SET_LOADING, payload: false }),
      put({ type: SET_ITEMS, payload: json })
    ]);
  } else {
    return [];//put({ type: SET_ITEMS, payload: [] });
  }
}

export function* loadChecklist() {
  yield takeLatest(GET_ITEMS, getTreeItems);
}
