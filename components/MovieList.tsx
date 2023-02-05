import { Button, Grid, Group, Stack, Text } from "@mantine/core";
import { filledBtn } from "../theme/styles";
import MovieCard from "./MovieCard";

type Props = {
    title: string;
};

const MovieList = ({ title }: Props) => {
    return (
        <Stack py={60}>
            <Group position='apart' mb={40}>
                <Text fz={30} fw={700}>
                    {title}
                </Text>
                <Button sx={filledBtn}>Show All</Button>
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

            <Button w={200} mx='auto' sx={filledBtn}>
                Load More
            </Button>
        </Stack>
    );
};

export default MovieList;
