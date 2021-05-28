import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import thunk from 'redux-thunk';
// import data from "./data";
import { megaProductReducer } from "./Redux/Reducer/Reducer";
const initialState = {};
const reducer = combineReducers({
    productList: megaProductReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk)))
export default store;







