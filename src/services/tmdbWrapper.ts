export const TMDB_ENDPOINT = "https://api.themoviedb.org/3";
export const TMDB_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";

export const pathToSearchAll = "/search/";
export const pathToSearchMovie = "/search/movie/";
export const pathToSearchTV = "/search/tv/";
export const pathToSearchActor = "/search/person/";

/* PARAMS */
export const TMDB_API_PARAMS = {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: "en_US",
};

export const fetcher = (args: string) => fetch(args).then(res => res.json());

const API = {
    all: `${TMDB_ENDPOINT}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    movies: `${TMDB_ENDPOINT}/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    tv: `${TMDB_ENDPOINT}/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    topRated: `${TMDB_ENDPOINT}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    netflixOriginals: `${TMDB_ENDPOINT}/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1&timezone=%20Europe%2FIstanbul&with_networks=213`,
    allGenre: `${TMDB_ENDPOINT}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    history: `${TMDB_ENDPOINT}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=36`,
    animation: `${TMDB_ENDPOINT}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=16`,
    fantasy: `${TMDB_ENDPOINT}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=14`,
    romance: `${TMDB_ENDPOINT}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`,
    getSingleMovie: (id: string) => `${TMDB_ENDPOINT}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    searchMovie: (query: string, type = "movie", page = "1") => `${TMDB_ENDPOINT}/search/movie?${type}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}&page=${page}`,
    getMovieList: (query: string, type = "movie") => `${TMDB_ENDPOINT}/search/${type}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`,
};

export const genres = {
    12: "Adventure",
    14: "Fantasy",
    16: "Animation",
    18: "Drama",
    27: "Horror",
    28: "Action",
    35: "Comedy",
    36: "History",
    37: "Western",
    53: "Thriller",
    80: "Crime",
    99: "Documentary",
    878: "Science Fiction",
    9648: "Mystery",
    10402: "Music",
    10749: "Romance",
    10751: "Family",
    10752: "War",
    10770: "TV Movie",
};

export default API;
