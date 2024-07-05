import React, { useEffect, useState } from 'react';
import styles from './DateTime.module.css'

export default function DateTime() {
  const [time, setTime] = useState(nowTime);

  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${
    today.getMonth() + 1
  }.${today.getDate()}`;
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(currentTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentTime]);

  return (
    <div className={styles.box}>
      <span className={styles.num}>{formattedDate}</span>
      <span className={styles.num}>{time}</span>
    </div>
  );
}

function nowTime() {
  const date = new Date();

  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
