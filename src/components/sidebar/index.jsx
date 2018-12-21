import React, { Component } from 'react';
import './index.scss';
import logo from './20180828144419.jpg';
import { Menu, Icon, Row, Col } from 'antd';

class Head extends React.Component {
    state = {
        current: 'mail',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div className="sideBar">
                <div className="card" style={{ height: '300px' }}>
                    <img src={logo} alt="" />
                    <div className="word">
                        <p className="title">xzzdll</p>
                        <p> 前端打字员</p>
                        <p> 文章 - &nbsp;&nbsp;|&nbsp;&nbsp;访问 - </p>
                    </div>
                </div>
                <div className="card" style={{ height: '100px' }}>
                    <div className="card_head">
                        <span className="title">
                            FOLLOW ME
        </span>
                    </div>
                    <div className="icon">
                        <Icon type="github" className="iconItem" />
                        <Icon type="qq" className="iconItem" />
                    </div>
                </div>
                <div className="card">
                    <div className="card_head">
                        <span className="title">
                            友情链接
        </span>
                    </div>
                    <div className="friendLink">
                        <a href="http://laibh.top" target="_blank">赖同学
        </a>
                        <a href="http://i-tech.tech" target="_blank">叶老师
        </a>
                        <a href="http://www.cnblogs.com/cnyball" target="_blank">C++大佬
        </a>
                        <a href="http://xiaojun1994.top" target="_blank">xiaojun
        </a>
                        <a href="https://www.cnblogs.com/DarkInNight/" target="_blank">回忆踩着风
        </a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Head
