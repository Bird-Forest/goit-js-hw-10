const searchParams = new URLSearchParams({
    fields: 'name,image,description,temperament,',
});
const url = `https://api.thecatapi.com/v1/breeds?${searchParams}`;
const api_key = "live_CIw3lZRkcpgh759C9YBXivIvAETipzFqRyXtOHa4sXukf5xIGdNG9JZOQ72DPlKH"



export function fetchBreeds() {
    return fetch(url,{headers: {
    'x-api-key': api_key
    }})
        .then((response) => {
            // console.log(response)
        if (!response.ok) {
        throw new Error(response.status);
        }
        return response.json();
    })
};




// https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}



// +++++++++++++
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
// ++++++++++++++
