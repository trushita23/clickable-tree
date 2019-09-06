import { SET_TAB_INDEX, SET_TAB_VALUE, SET_ITEMS, SET_LOADING } from "./_actions";
export function tabTransition(state: any, action: any) {
  switch (action.type) {
    case SET_TAB_VALUE:
      return Object.assign({}, state, { tabValue: action.payload });
    case SET_TAB_INDEX:
      return Object.assign({}, state, { tabIndex: action.payload });
    case SET_ITEMS:
      if(action.payload.length !== 0) {
        return Object.assign({}, state, { tabItems: action.payload, loading: false, tabValue: action.payload[0].value, tabIndex: 0 });
      } else {
        return Object.assign({}, state, {loading: true});  
      }
    case SET_LOADING:
      return Object.assign({}, state, { loading: action.payload });
    default:
      return Object.assign({}, state);
  }
}
