import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Button from 'antd/lib/button';

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
        <header className="App-header">
          <Button type="primary"  onClick={this.fetchList}>测试接口</Button >
          <span className="App-link">{list.message}</span>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
