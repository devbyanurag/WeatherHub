import React, { useEffect, useState } from 'react'
import styles from './ProjectionCard.module.scss'
import { ForecastedWeather, Forecasted_Value_Type } from '@/app/types/forecast_weather';
import { formatDate, formatTimestamp, formatWeekDate, kelvinToCelsius, kelvinToFahrenheit } from '@/app/utils/services';
import { useCelsius } from '@/app/context/temperature';
import Image from 'next/image';

interface ProjectionCardProps {
  weeklyForecast: ForecastedWeather


}
const ProjectionCard = ({  weeklyForecast }: ProjectionCardProps) => {

  const { celsius } = useCelsius()
  return (
    <div className={styles.card_container}>
      <div className={styles.heading}>
        <p>{formatWeekDate(weeklyForecast.dt)}</p>
        <p>{formatTimestamp(weeklyForecast.dt)}</p>
      </div>
      <div className={styles.main}>
        <p className={styles.temperature}>{celsius ? kelvinToCelsius(weeklyForecast.main.temp) : kelvinToFahrenheit(weeklyForecast.main.temp)}</p>
        <p>{weeklyForecast.weather[0].main}</p>

      </div>
      <div className={styles.footer}>
        <div className={styles.weather_info}>
          <div className={styles.weather_attributes}>
            <Image
              src={`/openweathermap/storm.png`}
              alt="weather"
              width={20}
              height={20}
              priority
            />
            <p>{weeklyForecast.wind.speed} m/s</p>
          </div>
          <div className={styles.weather_attributes}>
            <Image
              src={`/openweathermap/pressure.png`}
              alt="weather"
              width={20}
              height={20}
              priority
            />
            <p>{weeklyForecast.main.pressure} hPa</p>
          </div>
          <div className={styles.weather_attributes}>
            <Image
              src={`/openweathermap/humidity.png`}
              alt="weather"
              width={20}
              height={20}
              priority
            />
            <p>{weeklyForecast.main.humidity}%</p>
          </div>
         
        </div>
        <Image
          src={`/openweathermap/${weeklyForecast.weather[0].icon}.png`}
          alt="weather"
          width={80}
          height={80}
          priority
        />
        

      </div>
    </div>
  )
}

export default ProjectionCard