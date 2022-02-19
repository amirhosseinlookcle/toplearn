import { combineReducers } from "redux";
import { courseReducer } from "./courseReducer";
import { coursesReducer } from "./coursesReducer";
import { userReducer } from "./userReducer";

export const reducers = combineReducers({
    courses: coursesReducer,
    course: courseReducer,
    user: userReducer
})