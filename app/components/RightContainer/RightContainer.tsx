import React from 'react'

import styles from './RightContainer.module.scss'
import Image from 'next/image';
import { formatTimestamp, formatVisiblity, kelvinToCelsius, kelvinToFahrenheit } from '@/app/utils/services';
import { useCelsius } from '@/app/context/temperature';
import { WeatherDataType } from '@/app/types/weather';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import HighlightCard from '../HighlightCard/HighlightCard';
interface RightContainerProps {
  weather: WeatherDataType,
  forecastedWeather: Forecasted_Value_Type
}

const RightContainer = ({ forecastedWeather, weather }: RightContainerProps) => {
  const { celsius } = useCelsius();


  return (
    <div className={styles.container}>
      <div className={styles.displayNone}>
        <HeaderContainer />
      </div>
      <div className={styles.right_container}>
        <h1 className={styles.heading}>Weather Highlights</h1>
        <div className={styles.highlights_container}>
        <HighlightCard heading={'Sunrise'} heading_value={formatTimestamp(weather.sys.sunrise)} image={'sunrise'} imgSize={50}/>
        <HighlightCard heading={'Sunset'} heading_value={formatTimestamp(weather.sys.sunset)} image={'sunset'} imgSize={50}/>
        <HighlightCard heading={'Wind'} heading_value={`${weather.wind.speed} km/h`} image={'storm'} imgSize={50}/>
        <HighlightCard heading={'Visibility'} heading_value={formatVisiblity(weather.visibility)} image={'visible'} imgSize={50}/>

        <HighlightCard heading={'Humidity'} heading_value={`${weather.main.humidity}%`} image={'humidity'} imgSize={50}/>

        <HighlightCard heading={'Pressure'} heading_value={`${weather.main.pressure} mb`} image={'pressure'} imgSize={50}/>

        <HighlightCard heading={'Feels like'} heading_value={celsius ? kelvinToCelsius(weather.main.feels_like):kelvinToFahrenheit(weather.main.feels_like)} image={'feels_like'} imgSize={50}/>
        </div>
        <div className={styles.divider}></div>
      </div>
    </div>
  )
}

export default RightContainer