import { AnyAction } from "redux";
import { requestCharacter,
  requestFailed,
  requestSuccess  } from "../actions";
import { CharacterType } from "../../types";

const INITIAL_STATE = {
	name: '',
	gender: '',
	culture: '',
	born: '',
}

const characterReducer = (state: CharacterType = INITIAL_STATE, action: AnyAction) => {
  switch(action.type) {
    case requestCharacter: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case requestSuccess: {
      return {
        ...state,
        isLoading: false,
        name: action.payload.name,
        gender: action.payload.gender,
        culture: action.payload.culture,
        born: action.payload.born,
      };
    }
    case requestFailed: {
      return {
        ...state,
        isLoading: false,
        error: 'Character not found',
      }
    }
    default: return state;
  }
};

export default characterReducer;