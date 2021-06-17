import { createStore, applyMiddleware, combineReducers } from "redux"
import reduxThunk from "redux-thunk"
import projectReducer from "./Reducers/reducers";
import logger from "redux-logger"


const middleware = applyMiddleware( reduxThunk, logger )


const store = createStore(combineReducers({
    projectReducer,
}),middleware);

store.subscribe(() => {

});

export default store

