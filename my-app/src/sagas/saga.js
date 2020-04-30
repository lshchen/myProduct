import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
export default function* hello() {
  while(true){
    const action= yield take('ADD_TODO');
    console.log(action);
    console.log('hello saga!')
    yield put({type:'ADD_TODO', obj:action.obj});
  }
}
