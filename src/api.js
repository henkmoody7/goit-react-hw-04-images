import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '29837109-1b31a6b22486f7808d21a2500';

export const fetchImages = async ({ query, page }) => {
  const options = {
    params: {
      q: query,
      page,
      key: KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  };
  const response = await axios.get('/', options);
  return response.data.hits;
};
