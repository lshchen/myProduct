import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible/flexible';
import './index.css';
import './assets/css/reset.css'
import App from './App';
import Category from "./pages/category/category";
import StarScore from "./pages/startStore/starStore";
import Detail from "./pages/detail/detail";
import {store, history} from './store'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Detail history={history} />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

