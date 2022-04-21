import { combineReducers } from "redux";
import { postReducer } from "./reducers/post/postReducer";

export const rootReducers = combineReducers({
    posts: postReducer,
})

export type rootState = ReturnType<typeof rootReducers>