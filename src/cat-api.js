// cat-api.js
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_MCbmjbpL2EK0M1ExHHJ0clpK8ztrjpAtYLeQ5PmMGUjuQ3wzfscrLeVh8obG0Lbz';

const BASE_URL = `https://api.thecatapi.com/v1/breeds`;
const BASE_URL_INFO = `https://api.thecatapi.com/v1/images/search`;

export function fetchBreeds() {
    // Показуємо загрузчик
    document.querySelector('.loader').style.display = 'block';
    document.querySelector('.breed-select').style.display = 'none';

    return axios
      .get(BASE_URL)
      .then(response => response.data)
      .finally(() => {
        document.querySelector('.loader').style.display = 'none';
            // Show the breed select
            document.querySelector('.breed-select').style.display = 'block';
      })
      .catch(error => {
        console.error('Error fetching cat breeds:', error);
        throw error;
      });
  }
  
  
  export function fetchCatByBreed(breedId) {
    const catInfoURL = `${BASE_URL_INFO}?breed_ids=${breedId}`;
  
    // Показуємо загрузчик
    document.querySelector('.loader').style.display = 'block';
    
  
    return axios
      .get(catInfoURL)
      .then(response => response.data[0])
      .finally(() => {
        // Ховаємо загрузчик
        document.querySelector('.loader').style.display = 'none';
      })
      .catch(error => {
        console.error('Error fetching cat information:', error);
        throw error;
      });
  }