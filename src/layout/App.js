import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Button from 'antd/lib/button';
import artical from '../pages/artical/index';
import { Router, Route, Link } from "react-router-dom";
import Foot from '../components/foot';
import Head from '../components/head';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list ? state.list : {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchList: (value) => {
      dispatch({type: 'list:fetchList', payload: value})
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  fetchList = () => {
    this.props.fetchList(1)
  }

  render() {
    const {list} = this.props
    return (
      <div className="App">
       <Head></Head>
        <header className="App-header">
        <Link to="/accounts">首页</Link>
          <Button type="primary"  onClick={this.fetchList}>测试接口</Button >
          <span className="App-link">{list.message}</span>
          <Route path="/accounts" component={artical} />
        </header>
        <Foot></Foot>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
