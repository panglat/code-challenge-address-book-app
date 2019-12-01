/**
 * @file Generate an Axios instance for http://randomuser.me
 * @module util/api/RandomUserAPI
 */
import axios from 'axios';
/**
 * @constant {AxiosStatic} RandomUserAPI Axios instance for http://randomuser.me.
 */
const RandomUserAPI = axios.create({
  baseURL: 'https://randomuser.me/api/',
});

export default RandomUserAPI;
