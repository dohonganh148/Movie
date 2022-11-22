import React, { Component } from 'react';
import styles from './ChairList.module.scss';
import {connect} from 'react-redux'
import Chair from '../Chair/Chair';

class ChairList extends Component {
  render() {
    const {chairList} = this.props;
    return (
      <div className={styles.content}>
          {chairList.map( (item) => (
              <div className={styles.row}>
                  <div className={styles.rowNumber}>{item.hang}</div>
                  <div className={styles.chair}>
                      {item.danhSachGhe.map( (chair) => {
                          return <Chair item={chair}/>
                      })}
                  </div>
              </div>
          ))}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    return{
        chairList: state.chair.chairList,
    }
}

export default connect(mapStateToProps)(ChairList);