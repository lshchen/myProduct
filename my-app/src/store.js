import {createStore,applyMiddleware,compose,combineReducers } from "redux";
import tabReducer from "./reducers/tabReducer";
import categoryReducer from "./reducers/categoryReducer";
import contentListReducer from './reducers/contentListReducer'
import scrollViewReducer from './reducers/scrollViewReducer'
import orderReducer from "./reducers/orderReducer";
import thunk from 'redux-thunk';

import { routerMiddleware,routerReducer} from 'react-router-redux';
const createHistory = require('history').createBrowserHistory
const history = createHistory();
const historyMiddle = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({}): compose;
const ENHANCERS = composeEnhancers(applyMiddleware(thunk));
const reducer = combineReducers({
    categoryReducer,
    tabReducer,
    contentListReducer,
    scrollViewReducer,
    orderReducer,
    router: routerReducer
});
The above error occurred in the <ConnectedRouter> component:
in ConnectedRouter (at src/index.js:12)
in Provider (at src/index.js:11)

Consider adding an error boundary to your tree to customize error handling behavior.
const store = createStore(
    reducer,
    applyMiddleware(thunk, historyMiddle),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export {
    store,
    history
};