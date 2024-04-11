export const fetchImages = str => {
  const API_KEY = '43304487-b7d5c7fa3c9a8a42508d5a037';
  const BASE_URL = 'https://pixabay.com/api';
  const ENDPOINT = '';

  const params = new URLSearchParams({
    key: API_KEY,
    q: str,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '9',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}${ENDPOINT}/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
