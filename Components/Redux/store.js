import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootreducer from "./reducers/rootreducer";
const middlewares=[logger,thunk];
export  const store=createStore(rootreducer,composeWithDevTools(applyMiddleware(...middlewares)));