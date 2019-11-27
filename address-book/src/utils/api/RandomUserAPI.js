/**
 * @file Generate Axios instance for http://randomuser.me
 * @module RandomUserAPI
 */
import axios from 'axios';
/**
 * @constant {AxiosStatic} RandomUserAPI Axios instance for http://randomuser.me.
 */
const RandomUserAPI = axios.create({
  baseURL: 'https://randomuser.me/api/',
});

export default RandomUserAPI;
