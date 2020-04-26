import { ORDER_DATA } from '../actions/actionTypes';

const initState = {
    list: []
};

const getOrderData = (state, action) =>{

    if (action.currentPage === 0) {
        return { ...state, list: action.obj.digestlist};
    } else {
        let list = state.list;
        return { ...state, list: list.concat(action.obj.digestlist)}
    }

}

const orderReducer = (state = initState, action) => {
    switch(action.type) {
        case ORDER_DATA: return getOrderData(state, action);
        default: return state;
    }
}

export default orderReducer;