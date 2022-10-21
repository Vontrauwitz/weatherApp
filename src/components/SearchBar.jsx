import React from 'react';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div>
      <input type='text' placeholder='City...' />
      <button onClick={() => onSearch('buscando...')}>Agregar</button>
    </div>
  )
};