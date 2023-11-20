import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_MCbmjbpL2EK0M1ExHHJ0clpK8ztrjpAtYLeQ5PmMGUjuQ3wzfscrLeVh8obG0Lbz';
const BASE_URL = `https://api.thecatapi.com/v1/breeds`;

function getBreeds() {
  axios
    .get(BASE_URL)
    .then(response => {
      const breeds = response.data;
      populateBreedsSelect(breeds);
      //   console.log('Cat breeds:', response.data);
    })
    .catch(error => {
      console.error('Error fetching cat breeds:', error);
    });
}

getBreeds();

function populateBreedsSelect(breeds) {
  const selectElement = document.querySelector('.breed-select');

  // Очищаем существующие опции, если они есть
  selectElement.innerHTML = '';

  // Проходим по массиву пород и создаем option для каждой породы
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.optio;
    value = breed.id; // Идентификатор породы в качестве значения
    option.text = breed.name; // Название породы в качестве текста

    // Добавляем созданную опцию в select
    selectElement.appendChild(option);
  });
}
