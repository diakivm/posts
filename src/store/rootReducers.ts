import { authReducer } from './reducers/auth/authReducer';
import { combineReducers } from "redux";
import { postReducer } from "./reducers/post/postReducer";

export const rootReducers = combineReducers({
    posts: postReducer,
    auth: authReducer
})

export type rootState = ReturnType<typeof rootReducers>