const api_key = "live_CIw3lZRkcpgh759C9YBXivIvAETipzFqRyXtOHa4sXukf5xIGdNG9JZOQ72DPlKH";

const url = `https://api.thecatapi.com/v1/breeds`;

export function fetchBreeds() {
    return fetch(url,{headers: {
    'x-api-key': api_key
    }})
        .then((response) => {
        if (!response.ok) {
        throw new Error(response.status);
        }
        return response.json();
        })
};















// export function errorMessage() {

//     loaderItem.style.display = 'none';

//     errorItem.style.display = 'block';
// };