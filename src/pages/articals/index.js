import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './index.scss';
import Button from 'antd/lib/button';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/monokai-sublime.css';
// import 'highlight.js/styles/github.css'

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
      id: this.props.match.params.id
    })
  }

  componentDidMount() {
    // this.node.scrollIntoView();
    this.fetchList()
    hljs.registerLanguage('javascript', javascript);
  }

  componentDidUpdate() {
    let blocks = this.refs.code.querySelectorAll('pre');
    blocks.forEach(block => {
      hljs.highlightBlock(block);
    });
  }

  render() {
    const list = this.props.articals.list ? this.props.articals.list[0] : {}
    return (
      <div ref={node => this.node = node}>
        {/* {list.map((x, index) => */}
        <div className={styles.articalCard}>
          <div className={styles.articalCardTitle}>{list.title}</div>
          <div className={styles.articalCardBody}>
            <div className="ql-snow">
              <div className="ql-editor">
                <div dangerouslySetInnerHTML={{ __html: list.content }} ref="code">
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
