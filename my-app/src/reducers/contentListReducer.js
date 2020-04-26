import { LIST_DATA } from '../actions/actionTypes';
import { CHANGEREADYSTATE } from '../actions/scrollViewActionsTypes.js';
const initState = {
    list: []
};

const getListData = (state, action) =>{

    if (action.currentPage === 0) {
        return { ...state, list: action.obj.poilist};
    } else {
        let list = state.list;
        return { ...state, list: list.concat(action.obj.poilist)}
    }

}

const contentListReducer = (state = initState, action) => {
    switch(action.type) {
        case LIST_DATA: return getListData(state, action);
        default: return state;
    }
}

export default contentListReducer;