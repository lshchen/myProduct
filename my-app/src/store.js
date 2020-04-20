import {createStore} from "redux";
import tabReducer from "./reducers/tabReducer";
const store = createStore(tabReducer);
export default store;