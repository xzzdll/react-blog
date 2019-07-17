import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.scss';
import { Button, Icon, Row, Col, Layout } from 'antd';
import index from '../pages/index/index';
import artical from '../pages/articals/index';
import say from '../pages/say/index';
import timeFile from '../pages/time-file/index';
import { Router, Route, Link, IndexRoute, Redirect } from "react-router-dom";
import Foot from '../components/foot';
import Head from '../components/head';
import Siderbar from '../components/sidebar';

const {
  Header, Footer, Sider, Content,
} = Layout;

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

  componentWillReceiveProps(nextProps){

    //当路由切换时
    if(this.props.location !== nextProps.location){
        window.scrollTo(0,0)
    }
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
                  <Route path="/index" component={index} />
                  <Route path="/artical" component={index} />
                  <Route path="/detail/:id" component={artical} />
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
