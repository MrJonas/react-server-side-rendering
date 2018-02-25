import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppReducers from "./../reducers";
import {newsReducers} from "./../reducers/newsReducer";

const configureStore = preloadedState =>
    createStore(newsReducers, preloadedState, applyMiddleware(thunk));

export default configureStore;