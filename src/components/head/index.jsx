import React, { Component } from 'react';
import './index.scss';
import { Menu, Icon, Row, Col } from 'antd';
import {withRouter } from 'react-router';

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
            <div className="head">
                <Row type="flex" justify="center">
                    <Col md={5} xs={24} sm={24} className="hidden-sm-and-down">
                        <div className="combined-bar"></div>
                        <div className="logo" onClick={this.handleClick1}>
                            xzzdll Blog
      </div>
                    </Col>
                    <Col className="menu" md={15} xs={24} sm={24}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="artical">
                                <Icon type="appstore" />文章
      </Menu.Item>
                            <Menu.Item key="say">
                                <Icon type="appstore" />说说
      </Menu.Item>
                            <Menu.Item key="collect">
                                <Icon type="alipay" />归档
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
