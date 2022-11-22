import React, { Component } from "react";
import ChairList from "../ChairList/ChairList";
import Result from "../Result/Result";
import styles from "./Home.module.scss";

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles.row}>
          <div className={styles.col1}>
            <div className={styles.content}>
              <h1>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
              <h4 className={styles.screen}>Màn hình</h4>
              <ChairList />
            </div>
          </div>
          <div className={styles.col2}>
            <Result />
          </div>
        </div>
      </div>
    );
  }
}
