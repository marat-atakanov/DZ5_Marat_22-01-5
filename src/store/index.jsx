import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {postsReducer} from "./postsReducer";

const rootReducer = combineReducers({
    post: postsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))