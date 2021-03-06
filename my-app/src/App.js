import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import BottomBar from './pages/BottomBar/BottomBar'
import Home from "./pages/home/home";
import My from "./pages/My/My";
import {Route, withRouter, Switch}  from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Order from "./pages/Order/Order";
function App(props) {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <div>{props.num}</div>*/}
      {/*  <button onClick={props.setNum}>新增</button>*/}
      {/*</header>*/}
      <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route path="/order" component={Order}/>
          <Route path="/my" component={My}/>
        </Switch>
        <BottomBar history={props.history}></BottomBar>
      </ConnectedRouter>
    </div>
  );
}

export default connect(
  (state) => {
        return {
            num: state.tabReducer.num
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
)(withRouter(App));
