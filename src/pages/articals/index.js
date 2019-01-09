import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './index.scss';
import Button from 'antd/lib/button';

const mapStateToProps = (state, ownProps) => {
  return {
    articals: state.detail ? state.detail : {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchList: (value) => {
      dispatch({ type: 'detail:fetchList', payload: value })
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: 10
    }
  }

  fetchList = () => {
    this.props.fetchList({
      currentPage: this.state.currentPage,
      pageSize: this.state.pageSize,
      id:this.props.match.params.id
    })
  }

  componentDidMount() {
    this.fetchList()
  }

  render() {
    const list = this.props.articals.list || []
    return (
      <div>
        {list.map((x, index) =>
          <div className={styles.articalCard} key={index}>
            <div className={styles.articalCardTitle}>{x.title}</div>
            <div className={styles.articalCardBody}>
              <div className="ql-snow">
                <div className="ql-editor">
                  <div dangerouslySetInnerHTML={{ __html: x.content }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
