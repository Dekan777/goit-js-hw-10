// cat-api.js
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_MCbmjbpL2EK0M1ExHHJ0clpK8ztrjpAtYLeQ5PmMGUjuQ3wzfscrLeVh8obG0Lbz';

const BASE_URL = `https://api.thecatapi.com/v1/breeds`;
const BASE_URL_INFO = `https://api.thecatapi.com/v1/images/search`;

export function fetchBreeds() {
  return axios
    .get(BASE_URL)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching cat breeds:', error);
      throw error;
    });
}


 export function fetchCatByBreed(breedId) {
    const catInfoURL = `${BASE_URL_INFO}?breed_ids=${breedId}`;
  
    return axios.get(catInfoURL)
      .then(response => response.data[0])
      .catch(error => {
        console.error('Error fetching cat information:', error);
        throw error;
      });
  }
