import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import Button from 'antd/lib/button';

const mapStateToProps = (state, ownProps) => {
  return {
    says: state.says ? state.says : {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchList: (value) => {
      dispatch({ type: 'says:fetchList', payload: value })
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
    const { list } = this.props
    return (
      <Button type="primary" onClick={this.fetchList}>测试接口22222</Button >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
