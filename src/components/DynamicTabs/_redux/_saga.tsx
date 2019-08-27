import { call, put, takeLatest } from "redux-saga/effects";
import { SET_ITEMS, GET_ITEMS } from "./_actions";
import axios  from 'axios';

export function* getTabList(action: any) {
  if (action) {
    
    let response = yield call(axios.get, action.url);
    yield put({ type: SET_ITEMS, payload: response.data });
  } else {
    yield put({ type: SET_ITEMS, payload: [] });
   }
}

export function* tabTransitionAsync() {
  yield takeLatest(GET_ITEMS, getTabList);
}
