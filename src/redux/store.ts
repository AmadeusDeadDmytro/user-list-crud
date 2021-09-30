import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";

import rootReducer from './reducers'

const initialState = {

}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

export default store