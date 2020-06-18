import authReducer from "./authReducers";
import { combineReducers, applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    auth:  authReducer
})

let store = createStore(rootReducers,applyMiddleware(thunk))
export default store