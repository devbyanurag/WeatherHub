"use client"
import React, { useState } from 'react';
import Header from "./components/header/page";
import { WeatherDataType } from "./types/weather";
import { api_openweathermap } from "./utils/apis";


export default function Home() {
  const [weather, setWeather] = useState<WeatherDataType | null>(null)
  const [latitude, setLatitude] = useState<number>(28.6517178)
  const [longitude, setlongitude] = useState<number>(77.2219388)
  const getWeatherData = async () => {
    try {
      
      const response = await api_openweathermap.get(
        `/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_APP_ID}`,
      );
      setWeather(response.data);
      console.log(response.data)

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
 
  
  return (
    // <div className="flex">
    //   <div className="w-1/5 text-white p-3 h-screen fixed" style={{ background: 'linear-gradient(180deg, rgba(39,16,78,1) 0%, rgba(100,55,159,1) 100%)' }}>
    //     <main>
    //       <h1>hi</h1>
    //     </main>
    //   </div>
    //   <div className="w-4/5 flex-1 bg-yellow-300 ml-1/5" style={{marginLeft: '20%',height:'1200px'}}>
    //     <Header />
    //     <main>
    //       <h1>hi</h1>
    //       <button onClick={getWeatherData}>get</button>
          
    //     </main>
    //   </div>
    // </div>
   <div>hello world!</div>
  )}