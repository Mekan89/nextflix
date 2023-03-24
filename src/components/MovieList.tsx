import { Button, Grid, Group, Loader, Stack, Text } from "@mantine/core";
import { useRouter } from "next/router";
import useFetch from "../hooks/useFetch";
// import useSWR from "swr";
import { IMovieCard } from "../types";
import MovieCard from "./MovieCard";

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
    // const { data, error, isLoading } = useSWR(url, fetcher);
    const { movies, mutate, size, setSize, isValidating, isLoading } = useFetch(url);
    const router = useRouter();

    console.log(movies);

    // const movies = data
    //     ?.map(page =>
    //         page.results.map((d: IMovie) => {
    //             return {
    //                 id: d.id,
    //                 name: d.title || d.name,
    //                 year: d.release_date || d.first_air_date,
    //                 url: d.backdrop_path,
    //                 vote: d.vote_average,
    //                 type: d.media_type,
    //             };
    //         })
    //     )
    //     .flat();

    // console.log(movies);

    if (isLoading) return <Loader />;
    // const { title, media_type, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, video, vote_average } = props;
    // console.log(data);

    return (
        <Stack py={60}>
            <Group position='apart' mb={40}>
                <Text fz={30} fw={700}>
                    New {title}
                </Text>
                <Button onClick={() => router.push(`/${title}`)}>Show All</Button>
            </Group>
            <Grid gutter='lg'>
                {movies?.map((el: IMovieCard) => (
                    <MovieCard key={el.id} {...el} />
                ))}
            </Grid>

            <Button w={200} mx='auto' onClick={() => setSize(size + 1)}>
                Load More
            </Button>
        </Stack>
    );
};

export default MovieList;
