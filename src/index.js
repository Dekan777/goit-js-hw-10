import axios from 'axios';
import { fetchBreeds } from './cat-api.js';
axios.defaults.headers.common['x-api-key'] =
  'live_MCbmjbpL2EK0M1ExHHJ0clpK8ztrjpAtYLeQ5PmMGUjuQ3wzfscrLeVh8obG0Lbz';
const BASE_URL = `https://api.thecatapi.com/v1/breeds`;

function populateBreedsSelect(breeds) {
  const selectElement = document.querySelector('.breed-select');

  // Очищаем существующие опции, если они есть
  selectElement.innerHTML = '';

  // Используем метод map для создания массива опций
  const breedOptions = breeds.map(breed => {
    const option = document.createElement('option');
    option.value = breed.id; // Идентификатор породы в качестве значения
    option.text = breed.name; // Название породы в качестве текста
    // console.log(option.value);
    return option;
    
  });

  // Добавляем все опции в select одним блоком
  selectElement.append(...breedOptions);
//   console.log(breedOptions);
}

fetchBreeds()
  .then(breeds => {
    populateBreedsSelect(breeds);
    // console.log('Cat breeds:', breeds);
  })
  .catch(error => {
    console.error('Error fetching cat breeds:', error);
  });
