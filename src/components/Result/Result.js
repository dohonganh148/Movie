import React, { Component } from "react";
import styles from "./Result.module.scss";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    const { chairSelectedList, handleChair, handlePay } = this.props;
    return (
      <div className={styles.content}>
        <h1>DANH SÁCH GHẾ BẠN CHỌN</h1>
        <div className={styles.type}>
          <div className={styles.list}>
            <button className={styles.booked}></button>
            <span>Ghế đã đặt</span>
          </div>
          <div className={styles.list}>
            <button className={styles.booking}></button>
            <span>Ghế đang chọn</span>
          </div>
          <div className={styles.list}>
            <button></button>
            <span>Ghế chưa đặt</span>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody>
              {chairSelectedList.map((item) => (
                <tr key={item.soGhe}>
                  <td>{item.soGhe}</td>
                  <td>{item.gia.toLocaleString()}</td>
                  <td>
                    <button onClick={() => {handleChair(item)}} className={styles.btnDel}>X</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td className={styles.total}>Tổng tiền:</td>
                <td>
                  {chairSelectedList.reduce( (totalPrice, item) => {
                    return totalPrice += item.gia
                  }, 0).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            <button onClick={handlePay} className={styles.purchase}>Thanh toán</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairSelectedList: state.chair.chairSelectedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChair: (chair) => {
      dispatch({
        type: 'CHANGE_CHAIR',
        payload: chair,
      })
    },
    handlePay: () => {
      dispatch({
        type: "PURCHASE"
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Result);
