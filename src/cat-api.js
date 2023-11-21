import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.headers.common['x-api-key'] =
  'live_MCbmjbpL2EK0M1ExHHJ0clpK8ztrjpAtYLeQ5PmMGUjuQ3wzfscrLeVh8obG0Lbz';
const BASE_URL = `https://api.thecatapi.com/v1/breeds`;
const BASE_URL_INFO = `https://api.thecatapi.com/v1/images/search`;


export function fetchBreeds() {
  document.querySelector('.loader').style.display = 'flex';
  document.querySelector('.breed-select').style.display = 'none';
  document.querySelector('.error').style.display = 'none';
  document.querySelector('.cat-info').style.display = 'none';
  return axios
    .get(BASE_URL)
    .then(response => response.data)
    .finally(() => {
      document.querySelector('.loader').style.display = 'none';
      document.querySelector('.breed-select').style.display = 'flex';
    })
    .catch(error => {
      document.querySelector('.error').style.display = 'flex';
      document.querySelector('.error').style.display = 'none';
      console.error('Error fetching cat breeds:', error);
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const catInfoURL = `${BASE_URL_INFO}?breed_ids=${breedId}`;
  document.querySelector('.loader').style.display = 'flex';
  document.querySelector('.cat-info').style.display = 'none';
  document.querySelector('.error').style.display = 'none';

  return axios
    .get(catInfoURL)
    .then(response => response.data[0])
    .finally(() => {
      document.querySelector('.loader').style.display = 'none';
      document.querySelector('.cat-info').style.display = 'flex';
    })
    .catch(error => {
      console.error('Error fetching cat information:', error);
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
      document.querySelector('.error').style.display = 'flex';
      throw error;
    });
}
