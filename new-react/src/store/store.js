import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import reader from "./reader/reader.js"
import reader2 from "./reader/reader2.js"
let reducers=combineReducers({reader,reader2})
let store=createStore(reducers,applyMiddleware(thunk))
export default store