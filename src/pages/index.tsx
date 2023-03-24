import { Box, Container } from "@mantine/core";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import requests from "../services/tmdbWrapper";

type Props = {
    children: React.ReactNode;
};

export default function Home() {
    return (
        <Box bg='white' pb={{ base: 50, sm: 0 }}>
            <Hero />

            <Container px={{ base: 20, sm: 40 }}>
                <MovieList title='movies' url={requests.movies} />
                <MovieList title='series' url={requests.series} />
            </Container>
        </Box>
    );
}
