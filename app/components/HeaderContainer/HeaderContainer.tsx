import React from 'react'
import styles from './HeaderContainer.module.scss'
import { useCelsius } from '@/app/context/temperature';

const HeaderContainer = () => {

  const { celsius, setTemperatureUnit } = useCelsius();

  return (
    <div className={styles.container}>
        <div onClick={()=>{setTemperatureUnit(true)}} className={`${styles.temp_button} ${celsius ? styles.active_temp_button : ''}`}>°C</div>
        <div onClick={()=>{setTemperatureUnit(false)}} className={`${styles.temp_button} ${!celsius ? styles.active_temp_button : ''}`}>°F</div>
    </div>
  )
}

export default HeaderContainer