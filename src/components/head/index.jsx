import React, { Component } from 'react';
import styles from './index.scss';
import { Menu, Icon, Row, Col  } from 'antd';
import { withRouter } from 'react-router';

class Head extends React.Component {
    state = {
        current: 'index',
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
        this.props.history.push(`/${e.key}`);
    }

    handleClick1 = () => {
        this.setState({
            current: 'index',
        });
        this.props.history.push(`/index`);
    }

    render() {
        return (
            <div className={styles.head}>
                <Row type="flex" justify="center">
                    <Col md={8} xs={24} sm={24}>
                        <div className={styles.combinedBar}></div>
                        <div className={styles.logo} onClick={this.handleClick1}>
                            John‘s blog
      </div>
                    </Col>
                    <Col className={styles.menu} md={10} xs={24} sm={24}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="artical">
                                <Icon type="book" />文章
      </Menu.Item>
                            <Menu.Item key="say">
                                <Icon type="smile" />说说
      </Menu.Item>
                            <Menu.Item key="collect">
                                <Icon type="folder-open" />归档
      </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        );
    }
}

// export default Head
export default withRouter(Head)
