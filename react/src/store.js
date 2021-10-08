import { create } from "domain";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { commentListReducer } from "./reducers/commentReducer";

const reducer = combineReducers({ commentList: commentListReducer });

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;
