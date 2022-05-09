import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { BrowserRouter as Routers } from 'react-router-dom'
import { Provider } from 'mobx-react'
import store from './store'

import { configure } from 'mobx'; // 开启严格模式
configure({ enforceActions: true }) // 开启严格模式


ReactDOM.render(
  <Provider {...store}>
    <Routers>
      <App />
    </Routers>
  </Provider>
  ,
  document.getElementById('root')
);

