import axios from 'axios';

const RandomUserAPI = axios.create({
  baseURL: 'https://randomuser.me/api/',
});

export const DEFAULT_GET_USER_LIST_RESULTS = 10;

export const getUserList = async (
  params = { results: DEFAULT_GET_USER_LIST_RESULTS, nationalitySelection: null }
) => {
  try {
    const response = await RandomUserAPI.get('', {
      params: {
        results: params.results,
        nat: params.nationalitySelection,
      },
    });
    return response.data.results;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default RandomUserAPI;
