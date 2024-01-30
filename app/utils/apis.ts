import axios, { AxiosInstance } from 'axios';
import { BASE_URL_OPENWEATHERMAP } from './constants';

export const api_openweathermap: AxiosInstance = axios.create({
  baseURL: BASE_URL_OPENWEATHERMAP,
});
