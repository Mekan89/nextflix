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

// export const API = {
// getMovieList: (type, page = 1) => `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
// getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
// getMovieMeta: (movieId, type) => `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
// getMovieSearch: (query, page) =>
//   `${tmdbEndpointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
// imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
// image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
// };

const API = {
    all: `${TMDB_ENDPOINT}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    movies: `${TMDB_ENDPOINT}/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    series: `${TMDB_ENDPOINT}/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    topRated: `${TMDB_ENDPOINT}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    netflixOriginals: `${TMDB_ENDPOINT}/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1&timezone=%20Europe%2FIstanbul&with_networks=213`,
    allGenre: `${TMDB_ENDPOINT}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    history: `${TMDB_ENDPOINT}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=36`,
    animation: `${TMDB_ENDPOINT}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=16`,
    fantasy: `${TMDB_ENDPOINT}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=14`,
    romance: `${TMDB_ENDPOINT}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`,
    search: `${TMDB_ENDPOINT}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`,
    getMovieList: (query: string, type = "movies") => `${TMDB_ENDPOINT}/search/${type}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`,
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

// fetchTrending: `/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,

//type =tv, movie,
export function searchMovie(searchKey = "", type = "movie") {
    return `${TMDB_ENDPOINT}/search/${type}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchKey}`;
}

console.log(searchMovie("dd"));

export function searchMovieId(id = null, type = "movie", seasonId = null) {
    const searchUrl = !seasonId ? `${TMDB_ENDPOINT}/${type}/${id}` : `${TMDB_ENDPOINT}/${type}/${id}/season/${seasonId}`;
    // response = requests.get(search_url)
    // return response
}

export function getGenre(id = null, type = "movie") {
    const searchUrl =
        id === "all"
            ? `${TMDB_ENDPOINT}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
            : `${TMDB_ENDPOINT}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${id}`;
    // response = requests.get(search_url)
    // return response
}

// function get_collection_by_id(collection_id):
//     collection_url = self.TMDB_URL + '/collection/{collection_id}'.format(
//         collection_id=collection_id) + self.TMDB_EXTRAS
//     # print(collection_id, type(collection_id), ' | ', collection_url)
//     response = requests.get(collection_url)
//     return response.json()

// function get_trailer(tmdb_id, media_type=None):

//     trailer_url = self.TMDB_URL + '/{media_type}/{tmdb_id}/videos'.format(
//         media_type=media_type.lower(),
//         tmdb_id=tmdb_id
//     ) + self.TMDB_EXTRAS
//     # print(trailer_url)
//     response = requests.get(trailer_url)
//     data = response.json()['results']
//     trailer = None
//     for video in data:
//         if video.get('type') == "Trailer":
//             return 'https://www.youtube.com/watch?v=' + video.get('key')
//     return None
