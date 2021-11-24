import { NextPage } from 'next';

import { format } from 'date-fns';

import styles from '../styles/home.module.scss';
import React, { useState } from 'react';
import { CurrentWeatherInfo } from 'src/models/current-weather';
import { getCurrentInfo } from '../services/weather.service';
import { toast } from 'react-toastify';

const Home: NextPage = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState<CurrentWeatherInfo>({} as CurrentWeatherInfo);

  const search = async (evt: React.KeyboardEvent) => {
    if (evt.key === 'Enter' && query.length > 0) {
      await getCurrentInfo(query)
        .then((response) => {
          setQuery('');
          return setWeather(response);
        })
        .catch(() => {
          setQuery('');
          toast.dark('Sorry, I could not find this location ; - ;');
        });
    }
  };

  return (
    /*eslint-disable unicorn/no-nested-ternary */
    <div
      className={
        weather?.main
          ? weather.main.temp > 16
            ? styles['home-container-warm']
            : styles['home-container-cold']
          : styles['home-container-default']
      }
      /*eslint-enable unicorn/no-nested-ternary */
    >
      <main>
        <div className={styles['search-container']}>
          <input
            type="text"
            className={styles['search-bar']}
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {weather.main ? (
          <>
            <div className={styles['location-box']}>
              <div className={styles.location}>
                {weather.name}, {weather.sys.country}
              </div>
              <div className={styles.date}>{format(new Date(), 'PPPP')}</div>
            </div>
            <div className={styles['weather-box']}>
              <div className={styles.temp}>{Math.round(weather.main.temp)}°</div>
              <div className={styles.weather}>{weather.weather[0].main}</div>
            </div>
          </>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
};

export default Home;
