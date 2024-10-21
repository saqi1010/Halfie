import axios from 'axios';
import { STAGGING_BASE_URL } from '@env';
import * as Keychain from 'react-native-keychain';

const axiosInstance = axios.create({
    baseURL: STAGGING_BASE_URL
});

const setBearerToken = (token) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};

const setAdditionalHeaders =  (accessToken) => {

    axiosInstance.defaults.headers.common['accesstoken'] = accessToken;
};

export { axiosInstance, setBearerToken, setAdditionalHeaders };

    // axiosInstance.interceptors.request.use(
    //     (config) => {
    //         config.headers = { ...config.headers, ...headers };
    //         return config;
    //     },
    //     (error) => {
    //         return Promise.reject(error);
    //     }
    // );