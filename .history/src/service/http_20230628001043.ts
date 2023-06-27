import axios, { AxiosResponse } from 'axios';

export const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.response.use((response: AxiosResponse) => {
  return response;
});
