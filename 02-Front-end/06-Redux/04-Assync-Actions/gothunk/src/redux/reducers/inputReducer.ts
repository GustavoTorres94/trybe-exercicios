import { AnyAction } from "redux";
import { INPUT_VALUE } from "../actions/actionTypes";
import { ReduxState } from "../../types";


const INITIAL_STATE = {
  input: '',
};

const inputReducer = (state: ReduxState = INITIAL_STATE, action: AnyAction) => {
  switch(action.type) {
    case INPUT_VALUE: {
      return {
        ...state,
        input: action.payload,
     }
    }
    default: return state;
  }
}

export default inputReducer;
