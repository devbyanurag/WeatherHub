import React, { useEffect, useRef, useState } from 'react'
import styles from './HeaderContainer.module.scss'
import { useCelsius } from '@/app/context/temperature';
import { api_geo_openweathermap } from '@/app/utils/apis';
import { CityInfoType } from '@/app/types/location';

interface HeaderContainerProps{
  changeLatLong: (lat: number, lon: number, stateLoc: string) => void
}

const HeaderContainer = ({changeLatLong}:HeaderContainerProps) => {

  const { celsius, setTemperatureUnit } = useCelsius();
  const [searchText, setSearchText] = useState<string>('')
  const [searchResult, setSearchResult] = useState<CityInfoType[] | null>(null)

  const handleSearch = async () => {
    try {
      const response = await api_geo_openweathermap.get(
        `direct?q=${searchText}&limit=5&lang=en&appid=${process.env.NEXT_PUBLIC_APP_ID}`,
      );
      console.log(response.data)
      setSearchResult(response.data)
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };


  const handleClear = () => {
    setSearchText('')
    setSearchResult(null)
  }

  const handleSumbit = (lat: number, lon: number, loc: string) => {
    changeLatLong(lat,lon, loc)
    setSearchResult(null)
  }

  return (
    <div className={styles.container}>
      <h1>Weather Hub</h1>
      <div className={styles.right_container}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder='Enter City Name' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          {
            searchResult === null ? <button onClick={handleSearch}>Search</button> :
              <button onClick={handleClear}>Clear</button>
          }

          <div className={styles.searchResultsContainer} >
            {searchResult?.map((data, index) => {
              return <div
               onClick={()=>{handleSumbit(data.lat,data.lon, data.state)}} 
               key={index} 
               tabIndex={0} 
               className={styles.searchListContainer}
               onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSumbit(data.lat, data.lon, data.state);
                }
              }}
              >
                <p>{data.name}, {data.state}, {data.country}</p>
              </div>
            })}

          </div>
        </div>
        <button onClick={() => { setTemperatureUnit(true) }} className={`${styles.temp_button} ${celsius ? styles.active_temp_button : ''}`}>°C</button>
        <button onClick={() => { setTemperatureUnit(false) }} className={`${styles.temp_button} ${!celsius ? styles.active_temp_button : ''}`}>°F</button>
      </div>
    </div>
  )
}

export default HeaderContainer