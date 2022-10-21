import React from 'react';
import Card from '../Card/Card';
import Cards from '../Cards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import data, { Cairns } from './../../../src/data';
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.Home}>

      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>

      <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />

    </div>
  );
}

export default Home;
