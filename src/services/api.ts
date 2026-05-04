import axios, {AxiosInstance, InternalAxiosRequestConfig, AxiosError} from 'axios';
import {BACKEND_URL, REQUEST_TIMEOUT, StatusCodes} from '../const';
import {getToken} from './token';
import {processErrorHandle} from './process-error-handle';
import {ErrorResponseData} from '../types/error';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorResponseData>) => {
      if (error.response) {
        const status = error.response.status as StatusCodes;
        const {data} = error.response;
        const shouldShowError = (
          status === StatusCodes.BAD_REQUEST ||
          status === StatusCodes.CONFLICT ||
          (status !== StatusCodes.UNAUTHORIZED && status !== StatusCodes.NOT_FOUND)
        );
          // status !== StatusCodes.UNAUTHORIZED &&
          // status !== StatusCodes.NOT_FOUND;
        if (shouldShowError && data) {
          processErrorHandle(data.message);
        }
      }

      throw error;
    }
  );

  return api;
};

