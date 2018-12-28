import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './index.scss';
import Button from 'antd/lib/button';

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
            <div className={styles.articalCardSubTitle}>
              <span>发表于:{x.date}</span>
              <span>标签:{x.type}</span>
              <span>浏览:{x.times}</span>
            </div>
            <div className={styles.articalCardBody} dangerouslySetInnerHTML={{ __html: x.content }}>
            </div>
            <div>....</div>
            <div className={styles.articalCardfoot}>
              <span>阅读全文 > ></span>
            </div>
          </div>
        )}
        {/* <el-pagination v-show="pageShow" :small=true @size-change="handleSizeChange" @current-change="handleCurrentChange" class="z-pagination" :current-page.sync="currentPage" :page-size="pageSize" layout="sizes,prev, pager, next" :total="totalRows">
        </el-pagination> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)