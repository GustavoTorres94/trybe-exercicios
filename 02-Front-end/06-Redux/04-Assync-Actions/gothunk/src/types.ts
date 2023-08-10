import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export type ReduxState = {
  // isFetching: boolean;
	input: string;
  // errorMessage: string;
}

export type Dispatch = ThunkDispatch<ReduxState, unknown, AnyAction>;

export type CharacterType = {
	name: string,
	gender: string,
	culture: string,
	born: string,
}

// export type inputType = {
// 	input: string;
// }
