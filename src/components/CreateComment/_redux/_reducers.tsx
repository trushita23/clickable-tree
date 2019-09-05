import { SET_COMMENT, SET_RESOLUTION_PROS, SET_RESOLUTION_CONS,
        SET_SCENARIO, SET_APPROVAL, SET_LOADING, CLEAR_COMMENT
} from "./_actions";
const initialState = { comment: '', resolutionPros: '', resolutionCons: '', rating: '',
  approval: '', loading: false
};
export default function createComment(state:any = initialState, action: any) {
  switch (action.type) {
    case SET_COMMENT:
      state = { ...state, comment: action.payload };
      break;
    case SET_LOADING:
      state = { ...state, loading: action.payload };
      break;
    case SET_RESOLUTION_PROS:
      state = { ...state, resolutionPros: action.payload };
      break;
    case SET_RESOLUTION_CONS:
      state = { ...state, resolutionCons: action.payload };
      break;
    case SET_SCENARIO:
      state = { ...state, rating: action.payload};
      break;
    case SET_APPROVAL:
      state = { ...state, approval: action.payload };
      break;
    case CLEAR_COMMENT:
      state = {
        ...state,
        ...initialState
      };
      break;
    default:
      state = Object.assign({}, state);
      break;
  }
  return state;
}
