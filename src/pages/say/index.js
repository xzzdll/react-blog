import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './index.scss';
import { Timeline, Button } from 'antd';

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
    this.state = {
    }
  }

  fetchList = () => {
    this.props.fetchList()
  }

  componentDidMount() {
    this.fetchList()
  }


  render() {
    const list = this.props.says.list || []
    return (
      <div>
        <Timeline pending="Recording...">
          {list.map((x, index) =>
            <Timeline.Item key={index}>
              <div className={styles.articalCard}>
                <div className={styles.articalCardBody} dangerouslySetInnerHTML={{ __html: x.content }} ></div>
                <div className={styles.date}>
                  发表于：{ x.date }
                </div>
              </div>
            </Timeline.Item>
          )}
        </Timeline>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
