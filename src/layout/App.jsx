import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Button, Icon} from 'antd';
import artical from '../pages/artical/index';
import { Router, Route, Link } from "react-router-dom";
import Foot from '../components/foot';
import Head from '../components/head';
import Siderbar from '../components/sidebar';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list ? state.list : {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchList: (value) => {
      dispatch({ type: 'list:fetchList', payload: value })
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: true
    }
  }

  fetchList = () => {
    this.props.fetchList(1)
  }
  handleClick = () => {
    this.setState({
      sidebar: !this.state.sidebar
    });
  }
  render() {
    const { list } = this.props
    let button = null;
    if (this.state.sidebar) {
      button = <Icon type="double-right" className="icon" style={{ color:"#fff" }}/>;
    } else {
      button = <Icon type="double-left" className="icon"/>;
    }

    return (
      <div>
        <div className="App" style={{ right: this.state.sidebar ? '160px' : '0px', width: '100%' }}>
          <Head></Head>
          <header className="App-header">
            {/* <Link to="/accounts">首页</Link>
            <Button type="primary" onClick={this.fetchList}>测试接口</Button >
            <span className="App-link">{list.message}</span>
            <Route path="/accounts" component={artical} /> */}
          </header>
          <Foot></Foot>
        </div>
        <div className="side" style={{ right: this.state.sidebar ? '0' : '-320px' }}>
          <Siderbar></Siderbar>
        </div>
        <div className="control" onClick={this.handleClick}>
          {button}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
