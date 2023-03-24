import useSWRInfinite from "swr/infinite";
import { fetcher, TMDB_IMAGE_ENDPOINT } from "../services/tmdbWrapper";
import { IMovie } from "../types";

// type Props = {
//     url:string
// }

const useFetch = (url: string) => {
    const { data, mutate, size, setSize, isValidating, isLoading } = useSWRInfinite(index => `${url}&page=${index + 1}`, fetcher, {
        revalidateOnFocus: false,
    });

    console.log(data);

    const movies = data
        ?.map(page =>
            page?.results?.map((d: IMovie) => {
                return {
                    id: d.id,
                    name: d.title || d.name,
                    year: d.release_date || d.first_air_date,
                    url: TMDB_IMAGE_ENDPOINT + d.backdrop_path,
                    vote: d.vote_average.toFixed(1),
                    type: d.media_type,
                };
            })
        )
        .flat();

    return { movies, mutate, size, setSize, isValidating, isLoading };
};

export default useFetch;
