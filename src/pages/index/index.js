import React, { Component,useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import styles from './index.scss';
import { Button, Pagination } from 'antd';
import { withRouter } from 'react-router';

function App({ history }) {
  const dispatch = useDispatch();
  const articals = useSelector((state) => state.articals ? state.articals : {});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const list = articals.list || []
  const totalRows = articals.totalRows || 0
  const fetchList = () => {
    dispatch({
      type: 'articals:fetchList', payload: {
        currentPage,
        pageSize
      }
    })
  }
  const showDetail = (id) => {
    history.push(`/detail/${id}`)
  }
  const onShowSizeChange = (current, pageSize) => {
    setPageSize(pageSize)
    setCurrentPage(current)
  }
  useEffect(() => { fetchList()},[])
  useEffect(() => { fetchList() }, [current, pageSize])
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
          <div className={styles.articalCardfoot} onClick={(e) => showDetail(x._id, e)}>
            <span>阅读全文 > ></span>
          </div>
        </div>
      )}
      <Pagination showSizeChanger onChange={onShowSizeChange} onShowSizeChange={onShowSizeChange} defaultCurrent={currentPage} total={totalRows} />
    </div>
  );
}
export default App