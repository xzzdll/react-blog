import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.scss';
import { Button, Icon, Row, Col } from 'antd';
import artical from '../pages/artical/index';
import say from '../pages/say/index';
import timeFile from '../pages/time-file/index';
import { Router, Route, Link, IndexRoute, Redirect } from "react-router-dom";
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
      button = <Icon type="double-right" className={styles.icon} style={{ color: "#fff" }} />;
    } else {
      button = <Icon type="double-left" className={styles.icon} />;
    }

    return (
      <div>
        <div className={styles.App} style={{ right: this.state.sidebar ? '160px' : '0px', width: '100%' }}>
          <Head></Head>
          <div className={styles.main}>
            <Row type="flex" justify="center">
              <Col md={14} sm={24} xs={24}>
              <Redirect to="/index" />
                <Route  path="/index" component={artical} />
                <Route path="/artical" component={artical} />
                <Route path="/say" component={say} />
                <Route path="/collect" component={timeFile} />
              </Col>
            </Row>
          </div>
          <Foot></Foot>
        </div>
        <div className={styles.side} style={{ right: this.state.sidebar ? '0' : '-320px' }}>
          <Siderbar></Siderbar>
        </div>
        <div className={styles.control} onClick={this.handleClick}>
          {button}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
