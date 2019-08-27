import {
  SET_ITEMS,
  SET_LOADING,
  SET_CHECKED,
  SET_SEARCH,
  SET_OPEN,
  SET_SELECETED_TAB
} from "./_actions";
export function checkboxChecked(state: any, action: any) {
  switch (action.type) {
    case SET_ITEMS:
      return Object.assign({}, state, { treeItems: action.payload, loading: false });
    case SET_CHECKED:
      return Object.assign({}, state, {
        checkedItems: action.payload,
        checkedStatus: !state.checkedStatus
      });
    case SET_SEARCH:
      return Object.assign({}, state, { searchString: action.payload });
    case SET_OPEN:
      return Object.assign({}, state, {
        openItems: action.payload,
        checkedStatus: !state.checkedStatus
      });
    case SET_SELECETED_TAB:
      return Object.assign({}, state, { selectedTab: action.payload });
    case SET_LOADING:
      return Object.assign({}, state, { loading: action.payload });
    default:
      return Object.assign({}, state);
  }
}
