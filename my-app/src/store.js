import {createStore,applyMiddleware,compose,combineReducers } from "redux";
import tabReducer from "./reducers/tabReducer";
import categoryReducer from "./reducers/categoryReducer";
import contentListReducer from './reducers/contentListReducer'
import scrollViewReducer from './reducers/scrollViewReducer'
import orderReducer from "./reducers/orderReducer";
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter} from 'connected-react-router';
// import createSagaMiddleware from "redux-saga"
// import rootSaga from './sagas/saga';
const createHistory = require('history').createBrowserHistory
const history = createHistory();
const historyMiddle = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// const sagaMiddleware = createSagaMiddleware()
const ENHANCERS = composeEnhancers(applyMiddleware(thunk,historyMiddle));
const reducer = combineReducers({
    categoryReducer,
    tabReducer,
    contentListReducer,
    scrollViewReducer,
    orderReducer,
    router: connectRouter(history)
});
const store = createStore(
    reducer,
    ENHANCERS,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// sagaMiddleware.run(rootSaga)
export {
    store,
    history
};
