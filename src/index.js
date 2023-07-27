import './css/styles.css';
import { fetchBreeds } from "./js/cat-api";


const select = document.querySelector('.breed-select')
console.dir(select)
const catInfo = document.querySelector('.cat-info')
console.dir(catInfo);
select.addEventListener('change', fetchCatByBreed);
// select.text 


let storedBreeds = [];



fetchBreeds()
    .then((data) => {
        
    data = data.filter(img => img.image?.url!=null)
    storedBreeds = data;
    // console.log(storedBreeds);
    for (let i = 0; i < storedBreeds.length; i++) {
        const breed = storedBreeds[i];
        let option = document.createElement('option'); 
        //skip any breeds that don't have an image
        if(!breed.image)continue
        //use the current array index
        option.value = breed.id;
        option.innerHTML = `${breed.name}`;
        select.appendChild(option);
        // fetchCatByBreed(0) 
    };
    })
    .catch((error) => console.log(error)); 


const api_key = "live_CIw3lZRkcpgh759C9YBXivIvAETipzFqRyXtOHa4sXukf5xIGdNG9JZOQ72DPlKH"


function fetchCatByBreed() {
    let breedId = select.value
    console.log(breedId)
    let id = select.selectedIndex
    console.log(id)
    
    const breed = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}` 
    
    return fetch(breed,{headers: {
    'x-api-key': api_key
    }})
        .then((response) => {
            console.log(response)
        if (!response.ok) {
        throw new Error(response.status);
        }
        return response.json();
        })
        .then((data) => {
        
        console.log(data)
        data = storedBreeds[id]
        console.log(data)
    
        console.log(storedBreeds[id].name)
        console.log(storedBreeds[id].description)
        console.log(storedBreeds[id].temperament)
        console.log(storedBreeds[id].image.url)
            
            renderBreeds(storedBreeds[id])
    })
        
    .catch((error) => console.log(error))
};


function renderBreeds() { 

    const image = document.createElement('img');
    image.src = `${storedBreeds[id].image.url}`;
    console.log(image)
    const title = document.createElement('h2');
    title.textContent = `${storedBreeds[id].name}`;
    title.style.fontSize = `${80}px`;

    const description = document.createElement('p');
    description.textContent = `${storedBreeds[id].description}`;

    const temperament = document.createElement('h3')
    temperament.textContent = `Temperament: ${storedBreeds[id].temperament}`;

    catInfo.append(image, title, description, temperament);
};


// renderBreeds()
// function renderBreeds(data) { 
//     const markup = data.map((elem) => {
    
//         // `<div>
//         // <img src="${storedBreeds[0].image.url}" alt="" id="breed_image">
//         // </div>
//         `<div id="breed_json">
//         <h2>"${storedBreeds[0].name}"</h2>
//         <p>"${storedBreeds[0].description}"</p>
//         <h3>"${storedBreeds[0].temperament}"</h3>
//         </div>`
//     }).json('');
//     catInfo.insertAdjacentHTML("beforeend", markup);
// };

// const param = { name, image:url, description, temperament}













// fetch(url,{headers: {
//     'x-api-key': api_key
//     }})
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(resp.statusaText)
//         }
//         // console.log(response);
//         return response.json();
//     })
// .then((data) => {
//    //filter to only include those with an `image` object
//     data = data.filter(img => img.image?.url!=null)
// //    console.log(data)
//     storedBreeds = data;
//     console.log(storedBreeds);
//     for (let i = 0; i < storedBreeds.length; i++) {
//     const breed = storedBreeds[i];
//     let option = document.createElement('option'); 
//      //skip any breeds that don't have an image
//     if(!breed.image)continue
//     //use the current array index
//     option.value = i;
//     option.innerHTML = `${breed.name}`;
//     select.appendChild(option);
//     }
// //    show the first breed by default
// //    console.log(showBreedImage())
//     console.dir(select)
// })
// .catch(function(error) {
// //    console.log(error);
// });

// function showBreedImage(index) {
//     document.getElementById("#breed_image").src = storedBreeds[index].image.url
//     document.getElementById("#breed_json").textContent = storedBreeds[index].temperament

// }


// select.addEventListener('input', onSearch)

// function onSearch(evt) {
//     const { sity, day } = evt.currentTarget.elements;
//     console.log
//     getWeather(sity.value, day.value)
//         .then((data) => createMark(data.forcast.forcastday))
//         .catch((error) => console.log(error))
// }






/* <div>
<img id="breed_image"></img>
</div> */

/* <div id="breed_json"></div> */



// document.getElementById("breed_image").src = storedBreeds[index].image.url;



// const markup = cars.map(({ id = "none", modal, type, price, img }) =>
//     `<li data-id="${id}">
//     <img src="${img}" alt="${modal}" class="img" />
//     <h2>Mark: ${modal}</h2>
//     <h3>Type: ${type}</h3>
//     <p>Price: ${price}</p>
// </li>`
// ).join('');
// container.insertAdjacentHTML("beforeend", markup);