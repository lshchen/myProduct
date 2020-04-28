import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible/flexible';
import './index.css';
import './assets/css/reset.css'
import App from './App';
import {store, history} from './store'
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

