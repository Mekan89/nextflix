import { Box, Container } from "@mantine/core";
import { Inter } from "@next/font/google";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    children: React.ReactNode;
};

export default function Home() {
    return (
        <Box bg='white' pb={{ base: 50, sm: 0 }}>
            <Hero />

            <Container>
                <MovieList title='New movies' />
                <MovieList title='New series' />
            </Container>
        </Box>
    );
}
