import React from 'react';
import styles from './SerchBar.module.css'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className={styles.contenedor}>
      <input className={styles.input} type='text' placeholder='City...' />
      <button className={styles.button} onClick={() => onSearch('buscando...')}>Agregar</button>
    </div>
  )
};