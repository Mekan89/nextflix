import { Button, Grid, Group, Stack, Text } from "@mantine/core";
import useSWR from "swr";
import { btnContained } from "../theme/styles";
import { fetcher } from "../utils/fetcher";
import MovieCard from "./MovieCard";
// import {IMovie} from '../../'

// {
//     adult: false;
//     backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg";
//     genre_ids: [28, 12, 878];
//     id: 505642;
//     media_type: "movie";
//     original_language: "en";
//     original_title: "Black Panther: Wakanda Forever";
//     overview: "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.";
//     popularity: 4782.887;
//     poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg";
//     release_date: "2022-11-09";
//     title: "Black Panther: Wakanda Forever";
//     video: false;
//     vote_average: 7.453;
//     vote_count: 3263;
// }

export type Props = {
    title: string;
};

const MovieList = ({ title }: Props) => {
    const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`, fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    // const { title, media_type, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, video, vote_average } = props;

    return (
        <Stack py={60}>
            <Group position='apart' mb={40}>
                <Text fz={30} fw={700}>
                    {title}
                </Text>
                <Button sx={btnContained}>Show All</Button>
            </Group>
            <Grid gutter='lg'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </Grid>

            <Button w={200} mx='auto' sx={btnContained}>
                Load More
            </Button>
        </Stack>
    );
};

export default MovieList;
