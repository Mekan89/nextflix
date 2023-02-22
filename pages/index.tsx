import { Box, Container } from "@mantine/core";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";

type Props = {
    children: React.ReactNode;
};

export default function Home() {
    return (
        <Box bg='white' pb={{ base: 50, sm: 0 }}>
            <Hero />

            <Container px={{ base: 20, sm: 40 }}>
                <MovieList title='New movies' />
                <MovieList title='New series' />
            </Container>
        </Box>
    );
}

// https://api.themoviedb.org/3/movie/550?api_key=5c103060aa43d7879861f936a199f784
