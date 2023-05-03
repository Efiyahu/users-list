import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { baseURL } from './urls';

const serverConfig: AxiosRequestConfig = {
  baseURL,
};

const createAxiosInstance = () => axios.create(serverConfig);
export const apiRequest: AxiosInstance = createAxiosInstance();
