import React from 'react'

import styles from './LeftContainer.module.scss'
import Image from 'next/image';
import { formatDate, formatTimestamp, kelvinToCelsius, kelvinToFahrenheit } from '@/app/utils/services';
import { useCelsius } from '@/app/context/temperature';
import { WeatherDataType } from '@/app/types/weather';
import { Forecasted_Value_Type } from '@/app/types/forecast_weather';

interface LeftContainerProps {
    weather: WeatherDataType,
    forecastedWeather: Forecasted_Value_Type,
    stateLocation: string
  }

const LeftContainer = ({forecastedWeather, weather, stateLocation}:LeftContainerProps) => {
  const { celsius } = useCelsius();

  return (
    <div className={styles.left_container}>
    <div className={styles.heading}>
      <div className={styles.location}>
        <h2>{weather.name}</h2>
        <p>{stateLocation}, {weather.sys.country}</p>
      </div>
      <div>
      <p className={styles.time}>{formatTimestamp(weather.dt)}</p>
      <p>{formatDate(weather.dt)}</p>
      </div>
    </div>
    <div className={styles.divider}></div>
    <div className={styles.weather}>
      <div className={styles.weather_img}>
        <Image
          src={`/openweathermap/${weather.weather[0].icon}.png`}
          alt="weather"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.weather_info}>
      <h1>{celsius ? kelvinToCelsius(weather.main.temp) : kelvinToFahrenheit(weather.main.temp)}</h1>
        <p>{weather.weather[0].main}</p>
      </div>
    </div>
    <div className={styles.divider}></div>
    <div className={styles.forecasted_container}>
      {
        forecastedWeather.list.slice(0, 5).map((weather)=>{
          return <div key={weather.dt} className={styles.forecasted_card}>
          <div className={styles.weather_img}>
            <Image
              src={`/openweathermap/${weather?.weather[0].icon}.png`}
              alt="weather"
              width={30}
              height={30}
              priority
            />
          </div>
          <div className={styles.weather_info}>
            <h1>{celsius ? kelvinToCelsius(weather.main.temp) : kelvinToFahrenheit(weather.main.temp)}</h1>
            <p>{formatTimestamp(weather.dt)}</p>
            <p>{formatDate(weather.dt)}</p>

          </div>
        </div>
        })
      }
    </div>
  </div>
  )
}

export default LeftContainer