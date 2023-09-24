import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getAllPitures = async (searchValue, page) => {
  const { data } = await axios(
    `?q=cat&page=${page}&key=36294375-9fa9664476d2bc95b254b24c2&image_type=photo&q=${searchValue}&orientation=horizontal&per_page=12`
  );
  return data;
};
