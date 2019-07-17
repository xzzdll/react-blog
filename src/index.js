import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Router, Route, Redirect, IndexRoute, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import artical from './pages/artical/index';
import './index.css';
import './quill.snow.css';
import './assets/live2d/js/live2d.js';
import './assets/live2d/css/live2d.css';
// import 'antd/dist/antd.css'
import App from './layout/App';
import createHashHistory from "history/createHashHistory";
import root from "./models/index";
import 'antd/dist/antd.css';
// import antd  from 'antd';

window.loadlive2d('live2d', '/live2d/model/tororo/tororo.model.json');

const history = createHashHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(root.rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(root.rootSaga);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
      </Route>
    </Router>
  </Provider >,

  document.getElementById("root")
);

// ReactDOM.render(
// <Provider store={store}>
//   <Router history={history}>
//     <Route path="/" component={App} />
//   </Router>
// </Provider>, document.getElementById('root'));
