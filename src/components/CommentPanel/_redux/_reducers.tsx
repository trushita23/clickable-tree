import { SET_COMMENTS, SET_LOADING } from "./_actions";
export default function commentDisplay(state: string, action: any) {
  switch (action.type) {
    case SET_COMMENTS:
      if(action.payload.length !== 0) {
        return Object.assign({}, state, { commentList: action.payload, loading: false });
      } else {
        return Object.assign({}, state, {loading: true});  
      }
    case SET_LOADING:
      return Object.assign({}, state, { loading: action.payload });
    default:
      return Object.assign({}, state);
  }
}
