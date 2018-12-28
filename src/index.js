import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Router, Route,Redirect,IndexRoute} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import artical from './pages/artical/index';
import './index.css';
// import 'antd/dist/antd.css'
import App from './layout/App';
import createHashHistory from "history/createHashHistory";
import root from "./models/index";
import 'antd/dist/antd.css';
// import antd  from 'antd';

const history = createHashHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(root.rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(root.rootSaga);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
      {/* <IndexRoute component={artical} /> */}
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
