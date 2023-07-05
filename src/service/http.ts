import axios, { AxiosResponse } from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

instance.interceptors.response.use((response: AxiosResponse) => {
  return response.data;
});
