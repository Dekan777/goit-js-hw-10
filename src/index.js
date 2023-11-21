import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';


const catInfoContainer = document.querySelector('.cat-info');
const loaderElement = document.querySelector('.loader');

function populateBreedsSelect(breeds) {
  // Очищаем существующие опции, если они есть
  selectElement.innerHTML = '';

  // Используем метод map для создания массива опций
  const breedOptions = breeds.map(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.text = breed.name;
    // console.log(option.value);
    return option;
  });

  // Добавляем все опции в select одним блоком
  selectElement.append(...breedOptions);
}

fetchBreeds()
  .then(breeds => {
    populateBreedsSelect(breeds);

    const slimSelect = new SlimSelect({
      select: '#selectElement',
      settings: {},
    });
  })
  .catch(error => {
    console.error('Error fetching cat breeds:', error);
  });

const selectElement = document.querySelector('.breed-select');

selectElement.addEventListener('change', async event => {
  const selectedBreedId = event.target.value;
  loaderElement.classList.add('loading');

  fetchCatByBreed(selectedBreedId)
    .then(catInfo => {
      console.log('Cat information:', catInfo);
    })
    .catch(error => {});
});

selectElement.addEventListener('change', async event => {
  const selectedBreedId = event.target.value;
  fetchCatByBreed(selectedBreedId)
    .then(catInfo => {
      catInfoContainer.innerHTML = '';
      // Создаем изображение и блок с информацией о коте
      const catImage = document.createElement('img');
      catImage.src = catInfo.url;
      catImage.alt = 'Cat Image';
      catImage.style.width = '300px';
      catImage.style.height = 'auto';
      catInfoContainer.appendChild(catImage);

      const catInfoDetails = document.createElement('div');
      catInfoDetails.innerHTML = `<p><strong>Name:</strong> ${catInfo.breeds[0].name}</p>
                                <p><strong>Description:</strong> ${catInfo.breeds[0].description}</p>
                                <p><strong>Temperament:</strong> ${catInfo.breeds[0].temperament}</p>`;
      catInfoContainer.appendChild(catInfoDetails);
    })
    .catch(error => {
      console.error('Error fetching cat information:', error);
    });
});
