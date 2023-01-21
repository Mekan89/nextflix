import { Button, Grid, Group, Stack, Text } from "@mantine/core";
<<<<<<< HEAD
<<<<<<< HEAD
import { filledBtn } from "../theme/styles";
=======
>>>>>>> 624d06a (movie app main page)
=======
import { filledBtn } from "../theme/styles";
>>>>>>> a1cb2a4 (movie app main page)
import MovieCard from "./MovieCard";

type Props = {
    title: string;
};

const MovieList = ({ title }: Props) => {
    return (
        <Stack my={60}>
            <Group position='apart' mb={40}>
<<<<<<< HEAD
<<<<<<< HEAD
                <Text fz={30} fw={700}>
                    {title}
                </Text>
                <Button sx={filledBtn}>Show All</Button>
=======
                <Text fz={25} fw={700}>
                    {title}
                </Text>
                <Button>Show All</Button>
>>>>>>> 624d06a (movie app main page)
=======
                <Text fz={30} fw={700}>
                    {title}
                </Text>
                <Button sx={filledBtn}>Show All</Button>
>>>>>>> a1cb2a4 (movie app main page)
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

<<<<<<< HEAD
<<<<<<< HEAD
            <Button w={225} mx='auto' sx={filledBtn}>
=======
            <Button w={225} mx='auto'>
>>>>>>> 624d06a (movie app main page)
=======
            <Button w={225} mx='auto' sx={filledBtn}>
>>>>>>> a1cb2a4 (movie app main page)
                Load More
            </Button>
        </Stack>
    );
};

export default MovieList;
