export const TMDB_ENDPOINT = "https://api.themoviedb.org/3";
export const TMDB_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";

export const pathToSearchAll = "/search/";
export const pathToSearchMovie = "/search/movie/";
export const pathToSearchTV = "/search/tv/";

const requests = {
    fetchTrending: `${TMDB_ENDPOINT}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    fetchTopRated: `${TMDB_ENDPOINT}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    fetchNetflixOriginals: `${TMDB_ENDPOINT}/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1&timezone=%20Europe%2FIstanbul&with_networks=213`,
    fetchHistoryMovies: `${TMDB_ENDPOINT}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=36`,
    fetchAnimationMovies: `${TMDB_ENDPOINT}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=16`,
    fetchFantasyMovies: `${TMDB_ENDPOINT}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=14`,
    fetchRomanceMovies: `${TMDB_ENDPOINT}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`,
};

export default requests;

// fetchTrending: `/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
