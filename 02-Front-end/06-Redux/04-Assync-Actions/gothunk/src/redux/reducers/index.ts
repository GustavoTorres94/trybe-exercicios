import { combineReducers } from "redux";
import inputReducer from "./inputReducer";
import characterReducer from "./characterReduce";

const rootReducer = combineReducers({inputReducer, characterReducer});

export default rootReducer;
