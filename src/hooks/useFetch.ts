import useSWR from "swr";
import { fetcher, TMDB_IMAGE_ENDPOINT } from "../services/tmdbWrapper";

// type Props = {
//     url:string
// }

const useFetch = (url: string) => {
    const { data, isLoading } = useSWR(url, fetcher);

    // const pages = data
    //     ?.map(item => {
    //         return {
    //             page: item.page,
    //             total_pages: item.total_pages,
    //             total_results: item.total_results,
    //         };
    //     })
    //     .flat();

    console.log(data);

    const movies = data?.results?.map((d: any) => {
        return {
            id: d.id,
            name: d.title || d.name,
            year: d.release_date || d.first_air_date,
            url: TMDB_IMAGE_ENDPOINT + d.backdrop_path,
            vote: d.vote_average.toFixed(1),
            type: d.media_type,
            description: d.overview,
        };
    });

    const page_result = { page: data?.page, total_pages: data?.total_pages, total_results: data?.total_results };

    return { movies, isLoading, page_result };
};

export default useFetch;
