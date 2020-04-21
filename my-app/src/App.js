import React from 'react';
import logo from './logo.svg';
// import './App.css';
import {connect} from 'react-redux';
import BottomBar from './pages/BottomBar/BottomBar'
function App(props) {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*  <div>{props.num}</div>*/}
      {/*  <button onClick={props.setNum}>新增</button>*/}
      {/*</header>*/}
      <BottomBar></BottomBar>
    </div>
  );
}

export default connect(
  (state) => {
    console.log(state);
        return {
            num: state.num
        }
  },
  (dispatch) => {
    return {
      setNum: () =>{
        dispatch({
          type: 'ADD_TODO',
          obj: 1,
        })
      }
    }
  }
)(App);
