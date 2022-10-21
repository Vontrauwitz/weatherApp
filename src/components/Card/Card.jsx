import React from 'react';
import styles from './Card.module.css'

export default function Card({ img, max, min, name, onClose }) {
  // acá va tu código
  console.log(img, max, min, name, onClose);
  return (
    <div className={styles.card}>
      <button className={styles.button} onClick={onClose}>X</button>
      <div className={styles.content}>
        <h4>{name}</h4>
        <p>Max: {max}</p>
        <p>Min: {min}</p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='clima' />
      </div>
    </div>
  )
};