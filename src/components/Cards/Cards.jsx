import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css'


export default function Cards({ cities }) {
  console.log(cities);
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={styles.contenedor}>
      {
        cities.map(city => (
          <Card
            name={city.name}
            max={city.main.temp_max}
            min={city.main.temp_min}
            onClose={() => alert(city.name)}
            img={city.weather[0].icon}
          />
        ))
      }

    </div>
  )
};