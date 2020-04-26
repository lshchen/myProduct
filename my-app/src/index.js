import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible/flexible';
import './index.css';
import './assets/css/reset.css'
import App from './App';
import {store, history} from './store'
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
ReactDOM.render(
  <Provider store={store}>
        <ConnectedRouter history={history}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

