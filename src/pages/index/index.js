import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './index.scss';
// import Button from 'antd/lib/button';
import { Button, Pagination } from 'antd';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    articals: state.articals ? state.articals : {}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchList: (value) => {
      dispatch({ type: 'articals:fetchList', payload: value })
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
      pageSize: this.state.pageSize
    })
  }

  showDetail = (id) => {
    this.props.history.push(`/detail/${id}`)
  }

  componentDidMount() {
    this.fetchList()
  }

  onShowSizeChange = (current, pageSize) => {
    this.setState({
      currentPage: current,
      pageSize
    }, () => {
      // window.scrollTo(0,0)
      this.fetchList()
    });
  }

  render() {
    const list = this.props.articals.list || []
    const totalRows = this.props.articals.totalRows || 0
    return (
      <div className={styles.main}>
        {list.map((x, index) =>
          <div className={styles.articalCard} key={index}>
            <div className={styles.articalCardTitle}>{x.title}</div>
            <div className={styles.articalCardSubTitle}>
              <span>发表于:{x.date}</span>
              <span>标签:{x.type}</span>
              <span>浏览:{x.times}</span>
            </div>
            <div className={styles.articalCardBody} dangerouslySetInnerHTML={{ __html: x.content }}>
            </div>
            <div>....</div>
            <div className={styles.articalCardfoot} onClick={(e) => this.showDetail(x._id, e)}>
              <span>阅读全文 > ></span>
            </div>
          </div>
        )}
        <Pagination showSizeChanger onChange={this.onShowSizeChange} onShowSizeChange={this.onShowSizeChange} defaultCurrent={this.state.currentPage} total={totalRows} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))