import React from 'react'

import styles from './right_container.module.scss'
import Image from 'next/image';
import { formatTimestamp, formatVisiblity, kelvinToCelsius, kelvinToFahrenheit } from '@/app/utils/services';
import { useCelsius } from '@/app/context/temperature';
import { WeatherDataType } from '@/app/types/weather';
// import Header from '../Header/Header';

interface RightContainerProps {
  weather: WeatherDataType,
  forecastedWeather: Forecasted_Value_Type
}

const RightContainer = ({ forecastedWeather, weather }: RightContainerProps) => {
  const { celsius } = useCelsius();


  return (
    <div className={styles.container}>
      <div className={styles.displayNone}>
        {/* <Header /> */}
      </div>
      <div className={styles.right_container}>
        <h1 className={styles.heading}>Weather Highlights</h1>
        <div className={styles.highlights_container}>
          <div className={styles.card_container}>
            <div className={styles.card_info}>
              <p className={styles.heading}>Sunrise</p>
              <p className={styles.heading_val}>{formatTimestamp(weather.sys.sunrise)}</p>
            </div>
            <Image
              src={`/openweathermap/sunrise.png`}
              alt="weather"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className={styles.card_container}>
            <div className={styles.card_info}>
              <p className={styles.heading}>Sunset </p>
              <p className={styles.heading_val}>{formatTimestamp(weather.sys.sunset)}</p>
            </div>
            <Image
              src={`/openweathermap/sunset.png`}
              alt="weather"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className={styles.card_container}>
            <div className={styles.card_info}>
              <p className={styles.heading}>Wind </p>
              <p className={styles.heading_val}>{weather.wind.speed} km/h</p>
            </div>
            <Image
              src={`/openweathermap/storm.png`}
              alt="weather"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className={styles.card_container}>
            <div className={styles.card_info}>
              <p className={styles.heading}>Visibility </p>
              <p className={styles.heading_val}>{formatVisiblity(weather.visibility)}</p>
            </div>
            <Image
              src={`/openweathermap/visible.png`}
              alt="weather"
              width={40}
              height={40}
              priority
            />
          </div>
          <div className={styles.card_container}>
            <div className={styles.card_info}>
              <p className={styles.heading}>Humidity</p>
              <p className={styles.heading_val}>{weather.main.humidity}%</p>
            </div>
            <Image
              src={`/openweathermap/humidity.png`}
              alt="weather"
              width={40}
              height={40}
              priority
            />
          </div>
          <div className={styles.card_container}>
            <div className={styles.card_info}>
              <p className={styles.heading}>Pressure</p>
              <p className={styles.heading_val}>{weather.main.pressure} mb</p>
            </div>
            <Image
              src={`/openweathermap/pressure.png`}
              alt="weather"
              width={40}
              height={40}
              priority
            />
          </div>
          <div className={styles.card_container}>
            <div className={styles.card_info}>
              <p className={styles.heading}>Feels like</p>
              <p className={styles.heading_val}>{formatTimestamp(weather.main.feels_like)}</p>
            </div>
            <Image
              src={`/openweathermap/feels_like.png`}
              alt="weather"
              width={40}
              height={40}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightContainer