/**
 * @file Manages user requests.
 * @module services/UserService
 */
import RandomUserAPI from '../utils/api/RandomUserAPI';

/**
 * @constant {number} DEFAULT_USER_LIST_LENGTH the default number of records to get from the
 * users list
 */
const DEFAULT_USER_LIST_LENGTH = 10;

/**
 * @typedef getUserListParams
 * @property {number} listLength number of records to be gotten.s
 * @property {string|null} params.nationalities comma-separated nationality list.
 */

/**
 * @function
 * @async
 * @description Get users list
 * @param {getUserListParams} params parameters object.
 */
export const getUserList = async (
  params = {
    listLength: DEFAULT_USER_LIST_LENGTH,
    nationalities: null,
  },
) => {
  try {
    const response = await RandomUserAPI.get('', {
      params: {
        results: params.listLength,
        nat: params.nationalities,
      },
    });
    return response.data.results;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    throw err;
  }
};
