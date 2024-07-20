import React from 'react';
import styles from './Pill.module.css';

const Pill = ({ label, status }) => (
  <span className={`${styles.pill} ${styles[status]}`}>
    {label}
  </span>
);

export default Pill;
