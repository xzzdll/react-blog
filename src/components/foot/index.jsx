import React, { Component } from 'react';
import styles from './index.scss';

class Foot extends Component {

  render() {
    return (
      <div className={styles.foot}>
        <div className={styles.item}>
            <div>
                All Rights Reserved
            </div>
        </div>
        <div className={styles.item}>
            <div>
                感谢开源世界提供的技术支持
            </div>
        </div>
    </div>
    );
  }
}

export default Foot
