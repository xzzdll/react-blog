import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import './index.css';
import App from './layout/App';
import * as serviceWorker from './serviceWorker';
import createHashHistory from "history/createHashHistory";
import root from "./models/index";

const history = createHashHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(root.rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(root.rootSaga);

render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App} />
    </Router>
  </Provider>,

  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
