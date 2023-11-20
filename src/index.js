import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_MCbmjbpL2EK0M1ExHHJ0clpK8ztrjpAtYLeQ5PmMGUjuQ3wzfscrLeVh8obG0Lbz';
const BASE_URL = `https://api.thecatapi.com/v1/breeds`;


function getTreiding() {
  axios
    .get(BASE_URL)
    .then(response => {
      console.log('Cat breeds:', response.data);
    })
    .catch(error => {
      console.error('Error fetching cat breeds:', error);
    });
}

getTreiding();
