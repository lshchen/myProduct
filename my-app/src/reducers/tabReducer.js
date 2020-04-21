import {ADD_TODO,CHANGE_TAB} from '../actions/actionTypes'
import {tabKey} from '../config'
const initState = {
    tabs: [
        {
            name: '首页',
            key: tabKey.home
        },
        {
            name: '订单',
            key: tabKey.order
        },
        {
            name: '我的',
            key: tabKey.my
        }
    ],
    activeKey: tabKey.home
}
const addTodo = (state,action)=>{
    let obj = action.obj;
    let num = state.num;
    return {
        num: num + obj
    }
}
const changeTab = (state,action)=>{
    let activeKey = action.obj.activeKey;
    return {...state,activeKey:activeKey}
}
const tabReducer = (state = initState,action) => {
    if (action.type === ADD_TODO) {
        return addTodo(state,action);
    } else if (action.activeKey === CHANGE_TAB) {
        return changeTab(state,action);
    } else {
        return state;
    }
}
export default tabReducer;
