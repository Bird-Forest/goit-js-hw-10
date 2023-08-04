const api_key = `live_CIw3lZRkcpgh759C9YBXivIvAETipzFqRyXtOHa4sXukf5xIGdNG9JZOQ72DPlKH`;

import './css/styles.css';
import { fetchBreeds } from "./js/cat-api";

const errorItem = document.querySelector('.error');
const loaderItem = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const select = document.querySelector('.breed-select');
console.dir(select)

select.addEventListener('change', fetchCatByBreed);

errorItem.style.display = 'none';
select.style.display = 'none';
select.value = '';

let storedBreeds = [];

fetchBreeds()
    .then((data) => {
        storedBreeds = data;
        
        for (let i = 0; i < storedBreeds.length; i++) {

            const breed = storedBreeds[i];
            let option = document.createElement('option');         
            
            option.innerHTML = `${breed.name}`;
            select.appendChild(option);
        };
    })
    .catch((error) => console.log(error)); 

function fetchCatByBreed(evt) {
    evt.preventDefault()
    let breedId = select.value 
    const url = "https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}"
    
    return fetch(url, {
        headers: {
            'x-api-key': api_key
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw errorMessage();
            }
            return response.json();
        })
        
        .then((data) => {
            let id = select.selectedIndex;
            data = storedBreeds[id];
        
            const obj = {
                title: data.name,
                description: data.description,
                temperament: data.temperament,
                image: data.image.url
            }
            return renderBreeds(obj);
        })
        .catch((error) => {
            setTimeout(() => {
                catInfo.style.display = 'none';
                errorMessage()
            }, 1000);
        });
};

function onLoader() {

    select.style.display = 'block';
};
onLoader()

function errorMessage() {
    loaderItem.style.display = 'none';

    errorItem.style.display = 'block';
};

function renderBreeds({ image, title, description, temperament}) { 
    let id = select.selectedIndex;
    
    if (storedBreeds.length > 1) {
        catInfo.innerHTML = '';
    };

    catInfo.innerHTML = `<img src="${image}" alt="" class = "picture">
    <h2 class = "title">${title}</h2>
    <p class = "description">${description}</p>
    <h3 class = "temperament">${temperament}</h3>`

    loaderItem.style.display = 'none';
};



















// fetchBreeds()
//     .then((data) => {
//         data = data.filter(img => img.image?.url != null)
//         storedBreeds = data;
        
//         for (let i = 0; i < storedBreeds.length; i++) {
//             const breed = storedBreeds[i];
//             let option = document.createElement('option');
            
//             if (!breed.image) continue
//             option.value = breed.id;
//             option.innerHTML = `${breed.name}`;
//             select.appendChild(option);
//         };
//     })
//     .catch((error) => console.log(error)); 

// function fetchCatByBreed() {
//     let breedId = select.value 
//     const url = "https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}"
    
//     return fetch(url, {
//         headers: {
//             'x-api-key': api_key
//         }
//     })
//         .then((response) => {
//             if (!response.ok) {
//                 throw errorMessage();
//             }
//             return response.json();
//         })

//         .then((data) => {
//             let id = select.selectedIndex;

//             data = storedBreeds[id];
            
//             return renderBreeds();
//         })
//         .catch((error) => console.log(error));
// };

// function onLoader() {

//     select.style.display = 'block';
   
//     fetchCatByBreed();
// };
// onLoader()

// function errorMessage() {

//     loaderItem.style.display = 'none';

//     errorItem.style.display = 'block';
// };

// function renderBreeds() { 
//     let id = select.selectedIndex;

//     if (storedBreeds.length > 1) {
//         catInfo.innerHTML = '';
//     }
//     const image = document.createElement('img');
//     const title = document.createElement('h2');
//     const description = document.createElement('p');
//     const temperament = document.createElement('h3');

//     image.style.display = 'block';
//     image.src = `${storedBreeds[id].image.url}`;
//     image.style.width = `${700}px`;
//     image.style.height = `${600}px`;
//     image.style.objectFit = 'cover';

//     title.textContent = `${storedBreeds[id].name}`;
//     title.style.fontSize = `${38}px`;
//     title.style.marginBottom = 0;

//     description.textContent = `${storedBreeds[id].description}`;
//     description.style.fontSize = `${24}px`;
    
//     temperament.textContent = `Temperament: ${storedBreeds[id].temperament}`;
//     temperament.style.fontSize = `${28}px`;
//     temperament.style.marginTop = 0;

//     catInfo.append(image, title, description, temperament);

//     loaderItem.style.display = 'none';
// };







// select.style.visibility = 'visible';
// select.style.visibility = 'hidden';














// const errorItem = document.querySelector('.error')
// errorItem.textContent = '';
// errorItem.style.visibility = 'hidden';
// console.dir(errorItem);




// catInfo.innerHTML +=`<img src="${image.src}" alt=""><h2>${title.textContent}</h2><p>${description.textContent}</p><h3>${temperament.textContent}</h3>`
