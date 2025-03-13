const API_KEY ="5d6c4becdd658dd62d7e47aa240bf5fd";
const BASE_URL="https://www.themoviedb.org/3";


export const getPopularMovies = async () =>{
    const response = await fetch(`${BASE_URL}\movie\popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results
}

export const searchMovies = async (query) =>{
    const response = await fetch(`${BASE_URL}\search\movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results
}