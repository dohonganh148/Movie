import React, { Component } from 'react';
import styles from './Chair.module.scss';
import clsx from 'clsx';
import {connect} from 'react-redux';

class Chair extends Component {
  render() {
    const {item, chairSelectedList, handleChair} = this.props;
    return (
      <button className= {clsx(
        styles.chairNumber,
        {[styles.booked]: item.daDat},
        {[styles.booking]: chairSelectedList.find( (ele) => ele.soGhe === item.soGhe)},
        )} disabled={item.daDat}
        onClick={() => {handleChair(item)}}
         >{item.soGhe}</button>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    chairSelectedList: state.chair.chairSelectedList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChair: (chair) => {
      dispatch({
        type: 'CHANGE_CHAIR',
        payload: chair, 
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chair);