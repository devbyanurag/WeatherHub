"use client"
import React, { useEffect, useState } from 'react';
import { WeatherDataType } from "./types/weather";
import { api_openweathermap } from "./utils/apis";
import styles from './page.module.scss'
import { useCelsius } from './context/temperature';
import LeftContainer from './components/LeftContainer/LeftContainer';
import RightContainer from './components/RightContainer/RightContainer';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import { Forecasted_Value_Type } from './types/forecast_weather';


export default function Home() {

  const val: WeatherDataType = {
    "coord": {
      "lon": 78.0437,
      "lat": 30.3256
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 283.34,
      "feels_like": 281.67,
      "temp_min": 283.34,
      "temp_max": 283.34,
      "pressure": 1018,
      "humidity": 48,
      "sea_level": 1018,
      "grnd_level": 940
    },
    "visibility": 10000,
    "wind": {
      "speed": 2.45,
      "deg": 44,
      "gust": 2.01
    },
    "clouds": {
      "all": 0
    },
    "dt": 1706630835,
    "sys": {
      "type": 1,
      "id": 9162,
      "country": "IN",
      "sunrise": 1706578815,
      "sunset": 1706617290
    },
    "timezone": 19800,
    "id": 1273313,
    "name": "Dehra Dūn",
    "cod": 200
  }

  const forecast_val: Forecasted_Value_Type = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1706637600,
        "main": {
          "temp": 283.62,
          "feels_like": 281.98,
          "temp_min": 283.62,
          "temp_max": 284.19,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 940,
          "humidity": 48,
          "temp_kf": -0.57
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.41,
          "deg": 46,
          "gust": 2.06
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-01-30 18:00:00"
      },
      {
        "dt": 1706648400,
        "main": {
          "temp": 283.55,
          "feels_like": 281.93,
          "temp_min": 283.55,
          "temp_max": 283.65,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 939,
          "humidity": 49,
          "temp_kf": -0.1
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 14
        },
        "wind": {
          "speed": 2.42,
          "deg": 43,
          "gust": 2.09
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-01-30 21:00:00"
      },
      {
        "dt": 1706659200,
        "main": {
          "temp": 283.39,
          "feels_like": 281.75,
          "temp_min": 283.39,
          "temp_max": 283.39,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 938,
          "humidity": 49,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 27
        },
        "wind": {
          "speed": 2.44,
          "deg": 39,
          "gust": 2.23
        },
        "visibility": 10000,
        "pop": 0.03,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-01-31 00:00:00"
      },
      {
        "dt": 1706670000,
        "main": {
          "temp": 286.37,
          "feels_like": 284.84,
          "temp_min": 286.37,
          "temp_max": 286.37,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 940,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 1.67,
          "deg": 45,
          "gust": 2.01
        },
        "visibility": 10000,
        "pop": 0.04,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-01-31 03:00:00"
      },
      {
        "dt": 1706680800,
        "main": {
          "temp": 292.89,
          "feels_like": 291.65,
          "temp_min": 292.89,
          "temp_max": 292.89,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 941,
          "humidity": 28,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 64
        },
        "wind": {
          "speed": 2.26,
          "deg": 205,
          "gust": 1.77
        },
        "visibility": 10000,
        "pop": 0.01,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-01-31 06:00:00"
      },
      {
        "dt": 1706691600,
        "main": {
          "temp": 294.07,
          "feels_like": 292.9,
          "temp_min": 294.07,
          "temp_max": 294.07,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 938,
          "humidity": 26,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 86
        },
        "wind": {
          "speed": 3.57,
          "deg": 227,
          "gust": 3.05
        },
        "visibility": 10000,
        "pop": 0.18,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-01-31 09:00:00"
      },
      {
        "dt": 1706702400,
        "main": {
          "temp": 289.17,
          "feels_like": 287.87,
          "temp_min": 289.17,
          "temp_max": 289.17,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 937,
          "humidity": 40,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 91
        },
        "wind": {
          "speed": 0.76,
          "deg": 251,
          "gust": 0.86
        },
        "visibility": 10000,
        "pop": 0.18,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-01-31 12:00:00"
      },
      {
        "dt": 1706713200,
        "main": {
          "temp": 285.33,
          "feels_like": 284.22,
          "temp_min": 285.33,
          "temp_max": 285.33,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 938,
          "humidity": 62,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 89
        },
        "wind": {
          "speed": 2.47,
          "deg": 32,
          "gust": 2.11
        },
        "visibility": 10000,
        "pop": 0.42,
        "rain": {
          "3h": 0.26
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-01-31 15:00:00"
      },
      {
        "dt": 1706724000,
        "main": {
          "temp": 284.64,
          "feels_like": 283.91,
          "temp_min": 284.64,
          "temp_max": 284.64,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 939,
          "humidity": 79,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 94
        },
        "wind": {
          "speed": 2.41,
          "deg": 36,
          "gust": 2.75
        },
        "visibility": 10000,
        "pop": 0.95,
        "rain": {
          "3h": 0.96
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-01-31 18:00:00"
      },
      {
        "dt": 1706734800,
        "main": {
          "temp": 283.87,
          "feels_like": 283.19,
          "temp_min": 283.87,
          "temp_max": 283.87,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 937,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 95
        },
        "wind": {
          "speed": 2.57,
          "deg": 55,
          "gust": 3.06
        },
        "visibility": 10000,
        "pop": 0.95,
        "rain": {
          "3h": 1.16
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-01-31 21:00:00"
      },
      {
        "dt": 1706745600,
        "main": {
          "temp": 283.84,
          "feels_like": 283.21,
          "temp_min": 283.84,
          "temp_max": 283.84,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 937,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 2.82,
          "deg": 54,
          "gust": 4.48
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 2.84
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-01 00:00:00"
      },
      {
        "dt": 1706756400,
        "main": {
          "temp": 284.56,
          "feels_like": 283.98,
          "temp_min": 284.56,
          "temp_max": 284.56,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 939,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.1,
          "deg": 54,
          "gust": 3.41
        },
        "visibility": 9621,
        "pop": 1,
        "rain": {
          "3h": 2.07
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-01 03:00:00"
      },
      {
        "dt": 1706767200,
        "main": {
          "temp": 288.03,
          "feels_like": 287.43,
          "temp_min": 288.03,
          "temp_max": 288.03,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 941,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 1.92,
          "deg": 117,
          "gust": 4.08
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 2.61
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-01 06:00:00"
      },
      {
        "dt": 1706778000,
        "main": {
          "temp": 288.17,
          "feels_like": 287.56,
          "temp_min": 288.17,
          "temp_max": 288.17,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 938,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 95
        },
        "wind": {
          "speed": 2.06,
          "deg": 93,
          "gust": 3.33
        },
        "visibility": 10000,
        "pop": 0.92,
        "rain": {
          "3h": 2.03
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-01 09:00:00"
      },
      {
        "dt": 1706788800,
        "main": {
          "temp": 285.67,
          "feels_like": 285.14,
          "temp_min": 285.67,
          "temp_max": 285.67,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 937,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 84
        },
        "wind": {
          "speed": 2.11,
          "deg": 83,
          "gust": 3.12
        },
        "visibility": 10000,
        "pop": 0.95,
        "rain": {
          "3h": 1.59
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-01 12:00:00"
      },
      {
        "dt": 1706799600,
        "main": {
          "temp": 283.12,
          "feels_like": 282.21,
          "temp_min": 283.12,
          "temp_max": 283.12,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 939,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 73
        },
        "wind": {
          "speed": 2.12,
          "deg": 24,
          "gust": 1.97
        },
        "visibility": 10000,
        "pop": 0.94,
        "rain": {
          "3h": 1.94
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-01 15:00:00"
      },
      {
        "dt": 1706810400,
        "main": {
          "temp": 282.7,
          "feels_like": 281.29,
          "temp_min": 282.7,
          "temp_max": 282.7,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 940,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 2.72,
          "deg": 42,
          "gust": 2.54
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 2.06
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-01 18:00:00"
      },
      {
        "dt": 1706821200,
        "main": {
          "temp": 282.21,
          "feels_like": 280.75,
          "temp_min": 282.21,
          "temp_max": 282.21,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 939,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 2
        },
        "wind": {
          "speed": 2.66,
          "deg": 43,
          "gust": 2.46
        },
        "visibility": 10000,
        "pop": 0.65,
        "rain": {
          "3h": 0.45
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-01 21:00:00"
      },
      {
        "dt": 1706832000,
        "main": {
          "temp": 281.39,
          "feels_like": 279.56,
          "temp_min": 281.39,
          "temp_max": 281.39,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 939,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 2.98,
          "deg": 40,
          "gust": 2.78
        },
        "visibility": 10000,
        "pop": 0.18,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-02 00:00:00"
      },
      {
        "dt": 1706842800,
        "main": {
          "temp": 283.52,
          "feels_like": 282.54,
          "temp_min": 283.52,
          "temp_max": 283.52,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 941,
          "humidity": 74,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.38,
          "deg": 39,
          "gust": 2.72
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-02 03:00:00"
      },
      {
        "dt": 1706853600,
        "main": {
          "temp": 291.62,
          "feels_like": 290.44,
          "temp_min": 291.62,
          "temp_max": 291.62,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 942,
          "humidity": 35,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.23,
          "deg": 252,
          "gust": 1.76
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-02 06:00:00"
      },
      {
        "dt": 1706864400,
        "main": {
          "temp": 292.69,
          "feels_like": 291.25,
          "temp_min": 292.69,
          "temp_max": 292.69,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 939,
          "humidity": 21,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.81,
          "deg": 273,
          "gust": 3.96
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-02 09:00:00"
      },
      {
        "dt": 1706875200,
        "main": {
          "temp": 287.92,
          "feels_like": 286.47,
          "temp_min": 287.92,
          "temp_max": 287.92,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 938,
          "humidity": 39,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.3,
          "deg": 278,
          "gust": 4.97
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-02 12:00:00"
      },
      {
        "dt": 1706886000,
        "main": {
          "temp": 284.34,
          "feels_like": 282.77,
          "temp_min": 284.34,
          "temp_max": 284.34,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 940,
          "humidity": 48,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.3,
          "deg": 31,
          "gust": 2
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-02 15:00:00"
      },
      {
        "dt": 1706896800,
        "main": {
          "temp": 283.01,
          "feels_like": 281.55,
          "temp_min": 283.01,
          "temp_max": 283.01,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 940,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.9,
          "deg": 40,
          "gust": 2.67
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-02 18:00:00"
      },
      {
        "dt": 1706907600,
        "main": {
          "temp": 281.62,
          "feels_like": 279.83,
          "temp_min": 281.62,
          "temp_max": 281.62,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 940,
          "humidity": 47,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 2
        },
        "wind": {
          "speed": 2.99,
          "deg": 35,
          "gust": 2.89
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-02 21:00:00"
      },
      {
        "dt": 1706918400,
        "main": {
          "temp": 281.05,
          "feels_like": 279.1,
          "temp_min": 281.05,
          "temp_max": 281.05,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 939,
          "humidity": 41,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 27
        },
        "wind": {
          "speed": 3.06,
          "deg": 36,
          "gust": 2.92
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-03 00:00:00"
      },
      {
        "dt": 1706929200,
        "main": {
          "temp": 283.67,
          "feels_like": 281.72,
          "temp_min": 283.67,
          "temp_max": 283.67,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 940,
          "humidity": 36,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 2.41,
          "deg": 39,
          "gust": 2.9
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-03 03:00:00"
      },
      {
        "dt": 1706940000,
        "main": {
          "temp": 292.5,
          "feels_like": 290.93,
          "temp_min": 292.5,
          "temp_max": 292.5,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 940,
          "humidity": 17,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 23
        },
        "wind": {
          "speed": 1.09,
          "deg": 250,
          "gust": 1.43
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-03 06:00:00"
      },
      {
        "dt": 1706950800,
        "main": {
          "temp": 293.35,
          "feels_like": 291.9,
          "temp_min": 293.35,
          "temp_max": 293.35,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 938,
          "humidity": 18,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 2.11,
          "deg": 266,
          "gust": 2.15
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-03 09:00:00"
      },
      {
        "dt": 1706961600,
        "main": {
          "temp": 288.43,
          "feels_like": 286.95,
          "temp_min": 288.43,
          "temp_max": 288.43,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 938,
          "humidity": 36,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 1.52,
          "deg": 274,
          "gust": 2.01
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-03 12:00:00"
      },
      {
        "dt": 1706972400,
        "main": {
          "temp": 285.72,
          "feels_like": 284.05,
          "temp_min": 285.72,
          "temp_max": 285.72,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 939,
          "humidity": 39,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 2.1,
          "deg": 46,
          "gust": 1.81
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-03 15:00:00"
      },
      {
        "dt": 1706983200,
        "main": {
          "temp": 286.36,
          "feels_like": 284.7,
          "temp_min": 286.36,
          "temp_max": 286.36,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 939,
          "humidity": 37,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 1.74,
          "deg": 44,
          "gust": 1.53
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-03 18:00:00"
      },
      {
        "dt": 1706994000,
        "main": {
          "temp": 285.83,
          "feels_like": 284.17,
          "temp_min": 285.83,
          "temp_max": 285.83,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 938,
          "humidity": 39,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 98
        },
        "wind": {
          "speed": 1.9,
          "deg": 39,
          "gust": 1.64
        },
        "visibility": 10000,
        "pop": 0.03,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-03 21:00:00"
      },
      {
        "dt": 1707004800,
        "main": {
          "temp": 284.63,
          "feels_like": 282.96,
          "temp_min": 284.63,
          "temp_max": 284.63,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 937,
          "humidity": 43,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 94
        },
        "wind": {
          "speed": 2.21,
          "deg": 50,
          "gust": 1.92
        },
        "visibility": 10000,
        "pop": 0.03,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-04 00:00:00"
      },
      {
        "dt": 1707015600,
        "main": {
          "temp": 287.39,
          "feels_like": 285.97,
          "temp_min": 287.39,
          "temp_max": 287.39,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 939,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 0.87,
          "deg": 64,
          "gust": 1.24
        },
        "visibility": 10000,
        "pop": 0.02,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-04 03:00:00"
      },
      {
        "dt": 1707026400,
        "main": {
          "temp": 289.14,
          "feels_like": 287.87,
          "temp_min": 289.14,
          "temp_max": 289.14,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 940,
          "humidity": 41,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 0.49,
          "deg": 9,
          "gust": 0.99
        },
        "visibility": 10000,
        "pop": 0.26,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-04 06:00:00"
      },
      {
        "dt": 1707037200,
        "main": {
          "temp": 290.67,
          "feels_like": 289.57,
          "temp_min": 290.67,
          "temp_max": 290.67,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 938,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 0.19,
          "deg": 150,
          "gust": 1.27
        },
        "visibility": 10000,
        "pop": 0.3,
        "rain": {
          "3h": 0.15
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-04 09:00:00"
      },
      {
        "dt": 1707048000,
        "main": {
          "temp": 287.28,
          "feels_like": 286.47,
          "temp_min": 287.28,
          "temp_max": 287.28,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 938,
          "humidity": 66,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 84
        },
        "wind": {
          "speed": 0.98,
          "deg": 349,
          "gust": 1.18
        },
        "visibility": 10000,
        "pop": 0.43,
        "rain": {
          "3h": 0.42
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2024-02-04 12:00:00"
      },
      {
        "dt": 1707058800,
        "main": {
          "temp": 285.24,
          "feels_like": 284.52,
          "temp_min": 285.24,
          "temp_max": 285.24,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 939,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 72
        },
        "wind": {
          "speed": 1.5,
          "deg": 27,
          "gust": 1.41
        },
        "visibility": 10000,
        "pop": 0.49,
        "rain": {
          "3h": 0.51
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2024-02-04 15:00:00"
      }
    ],
    "city": {
      "id": 1273313,
      "name": "Dehra Dūn",
      "coord": {
        "lat": 30.3256,
        "lon": 78.0437
      },
      "country": "IN",
      "population": 522081,
      "timezone": 19800,
      "sunrise": 1706578815,
      "sunset": 1706617290
    }
  }

  const [weather, setWeather] = useState<WeatherDataType | null>(null)
  const [forecastedWeather, setForecastedWeather] = useState<Forecasted_Value_Type | null>(null)

  const [latitude, setLatitude] = useState<number>(30.3255646)
  const [longitude, setlongitude] = useState<number>(78.0436813)
  const [stateLocation,setStateLocation]=useState<string>('Uttarakhand')
  

  useEffect(() => {
    getWeatherData()
  }, [latitude,longitude])

  const getWeatherData = async () => {
    try {

      const response = await api_openweathermap.get(
        `/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_APP_ID}`,
      );
      setWeather(response.data);
      const response_forecast = await api_openweathermap.get(
        `/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_APP_ID}`,
      );
      setForecastedWeather(response_forecast.data);

      // setForecastedWeather(forecast_val)
      // setWeather(val)
      

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const changeLatLong=(lat: number, lon: number, stateLoc: string)=>{
    setLatitude(lat)
    setlongitude(lon)
    setStateLocation(stateLoc)
  }


  return (
    <div className={styles.container}>
      <div className={styles.displayNone}>
        <HeaderContainer changeLatLong={changeLatLong}/>
      </div>
      {weather && forecastedWeather && <LeftContainer weather={weather} forecastedWeather={forecastedWeather} stateLocation={stateLocation} />}
     

      {weather && forecastedWeather && <RightContainer weather={weather} forecastedWeather={forecastedWeather}  changeLatLong={changeLatLong}/>}

    </div>
  )
}