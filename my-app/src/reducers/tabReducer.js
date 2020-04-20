import {ADD_TODO} from '../actions/actionTypes'
const initState = {
    num: 0
}
const addTodo = (state,action)=>{
    let obj = action.obj.num;
    let num = state.num;
    return {
        num: num + obj
    }
}
const tabReducer = (state = initState,action) => {
    if (action.type == ADD_TODO) {
        return addTodo(state,action);
    } else {
        return state;
    }
}
export default tabReducer;