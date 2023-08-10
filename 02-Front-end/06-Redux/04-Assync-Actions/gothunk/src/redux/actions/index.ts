import getCharacters from "../../services/apiRequest";
import { CharacterType, Dispatch } from "../../types";
import { INPUT_VALUE,
  CHARACTER_REQUEST_STARTED,
  CHARACTER_REQUEST_SUCCESS,
  CHARACTER_REQUEST_FAILED } from "./actionTypes";

// Action Creatos
export const inputValue = (value: string) => ({
  type: INPUT_VALUE,
  payload: value,
});

export const requestCharacter = () => ({
  type: CHARACTER_REQUEST_STARTED,
});

export const requestSuccess = ({name, gender, culture, born}: CharacterType) => ({
  type: CHARACTER_REQUEST_SUCCESS,
  isLoading: false,
  payload: {
    name,
    gender,
    culture,
    born,
  }
});

export const requestFailed = (error: string) => ({
  type: CHARACTER_REQUEST_FAILED,
  isLoading: false,
  payload: error,
})


// Thunk Actions Creators

export const characterReturn = (input: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestCharacter());
      const response = await getCharacters(input);
      dispatch(requestSuccess(response));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  }
}