import useSWR from "swr";
import { fetcher } from "../../utils";

// page:1,
// total_pages: 1000,
// total_results: 20000,
// results = {
//      "adult": false,
//      "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
//      "genre_ids": [28, 12, 878],
//      "id": 505642,
//      "media_type": "movie",
//      "original_language": "en",
//      "original_title": "Black Panther: Wakanda Forever",
//      "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
//      "popularity": 4782.887,
//      "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
//      "release_date": "2022-11-09",
//      "title": "Black Panther: Wakanda Forever",
//      "video": false,
//      "vote_average": 7.453,
//      "vote_count": 3263,
//  }

export type Props = {
    title: string;
    url: string;
};

const MovieList = ({ title, url }: Props) => {
    const { data, error, isLoading } = useSWR(url, fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    // const { title, media_type, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, video, vote_average } = props;
    // console.log(data);

    return;

    {
    }
};

export default MovieList;
