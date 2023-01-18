import { Button, Grid, Group, Stack, Text } from "@mantine/core";
import MovieCard from "./MovieCard";

type Props = {
    title: string;
};

const MovieList = ({ title }: Props) => {
    return (
        <Stack my={60}>
            <Group position='apart' mb={40}>
                <Text fz={25} fw={700}>
                    {title}
                </Text>
                <Button>Show All</Button>
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

            <Button w={225} mx='auto'>
                Load More
            </Button>
        </Stack>
    );
};

export default MovieList;
