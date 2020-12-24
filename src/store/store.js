import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./combine-reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose;

var store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunkMiddleware), 
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
); // tạo ra một cái kho gán cho biến store

export default store;