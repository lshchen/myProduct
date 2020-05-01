// import { CHANGE_TAB } from '../actions/actionTypes.js';
import { TABKEY } from '../detailCofig';
const initState = {
    tabs: [
        {
            name: '点菜',
            key: TABKEY.menu
        },
        {
            name: '评价',
            key: TABKEY.comment
        },
        {
            name: '商家',
            key: TABKEY.restanurant
        }
    ],
    // activeKey: TABKEY.my
};


const detailReducer = (state = initState, action) => {

    switch(action.type) {
        // case CHANGE_TAB: return changeTab(state, action);
        default: return state;
    }
};

export default detailReducer;