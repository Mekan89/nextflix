import { Box, Stack } from "@mantine/core";
import { useState } from "react";
import { IMovieCard } from "../types";
import MovieFilterCard from "./MovieFilterCard";
import Pagination from "./Pagination";

type Props = {
    movies: IMovieCard[];
};

const Content = ({ movies }: Props) => {
    const [activePage, setPage] = useState(1);

    return (
        <Stack>
            <Box>
                {movies &&
                    movies?.map(movie => {
                        return <MovieFilterCard key={movie?.id} movie={movie} />;
                    })}
            </Box>
            <Pagination page={activePage} onChange={() => setPage} total={500} />
        </Stack>
    );
};

export default Content;
