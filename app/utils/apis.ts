import axios, { AxiosInstance } from 'axios';
import { BASE_URL_GEO_OPENWEATHERMAP, BASE_URL_OPENWEATHERMAP } from './constants';

export const api_openweathermap: AxiosInstance = axios.create({
  baseURL: BASE_URL_OPENWEATHERMAP,
});

export const api_geo_openweathermap: AxiosInstance = axios.create({
    baseURL: BASE_URL_GEO_OPENWEATHERMAP,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      // other headers if needed
    },
  });
  
