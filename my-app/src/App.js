import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import BottomBar from './pages/BottomBar/BottomBar'
import Home from "./pages/home/home";
import My from "./pages/My/My";
import { Route, WithRouter,Switch} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';
import Order from "./pages/Order/Order";
function App(props) {
  console.log(props);
  // { history, context }
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
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route path="/order" component={Order}/>
          <Route path="/my" component={My}/>
        </Switch>
        <BottomBar></BottomBar>
      </ConnectedRouter>

    </div>
  );
}

export default WithRouter(connect(
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
)(App));
