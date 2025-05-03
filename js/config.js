const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const API_BASE_URL = 'https://api.themoviedb.org/3/movie';
let MAX_PAGE = 500

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
};