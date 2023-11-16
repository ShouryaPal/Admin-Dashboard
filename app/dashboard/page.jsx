import React from 'react'
import Transactions from '../ui/dashboard/transactions/transactions';
import Chart from '../ui/dashboard/chart/chart';
import Card from "../ui/dashboard/card/card"
import styles from "../ui/dashboard/dashboard.module.css";
const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Transactions/>
        <Chart/>
      </div>
    </div>
  )
}

export default DashboardPage
