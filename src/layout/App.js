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
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button type="primary"  onClick={this.fetchList}>test</Button >
          <span>{list.message}</span>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
