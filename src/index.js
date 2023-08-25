const api_key = `live_CIw3lZRkcpgh759C9YBXivIvAETipzFqRyXtOHa4sXukf5xIGdNG9JZOQ72DPlKH`;

import './css/styles.css';
import { fetchBreeds } from './js/cat-api';

const loaderItem = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const select = document.querySelector('.breed-select');

select.addEventListener('change', fetchCatByBreed);
loaderItem.style.display = 'block';
loaderItem.textContent = 'Loading data, please wait...';

let storedBreeds = [];

window.addEventListener('load', function () {
  setTimeout(() => {
    loaderItem.style.display = 'none';
    loaderItem.textContent = '';
  }, 2000);
});

fetchBreeds()
  .then(data => {
    storedBreeds = data;

    for (let i = 0; i < storedBreeds.length; i++) {
      const breed = storedBreeds[i];
      let option = document.createElement('option');

      option.innerHTML = `${breed.name}`;
      select.appendChild(option);
    }
  })
  .catch(error => console.log(error));

function fetchCatByBreed(evt) {
  evt.preventDefault();

  let breedId = select.value;
  const url = 'https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}';

  return fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw errorMessage();
      }
      return response.json();
    })
    .then(data => {
      let id = select.selectedIndex;
      data = storedBreeds[id];

      const obj = {
        title: data.name,
        description: data.description,
        temperament: data.temperament,
        image: data.image.url,
      };
      return renderBreeds(obj);
    })
    .catch(error => {
      errorMessage();
    });
}

function errorMessage() {
  catInfo.innerHTML = '';
  loaderItem.style.display = 'block';
  loaderItem.classList.add('error');
  loaderItem.textContent = 'Oops! Please try another option.';
  setTimeout(() => {
    loaderItem.style.display = 'none';
    loaderItem.classList.remove('error');
    loaderItem.textContent = '';
  }, 13000);
}

function renderBreeds({ image, title, description, temperament }) {
  let id = select.selectedIndex;

  if (storedBreeds.length > 1) {
    catInfo.innerHTML = '';
  }
  catInfo.innerHTML = `<img src="${image}" alt="" class = "picture">
    <h2 class = "title">${title}</h2>
    <p class = "description">${description}</p>
    <h3 class = "temperament">Temperament: ${temperament}</h3>`;
}
