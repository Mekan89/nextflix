import { Box, Stack } from "@mantine/core";
import { IMovieCard, IPagination } from "../types";
import MovieFilterCard from "./MovieFilterCard";
import Pagination from "./Pagination";

type Props = {
    movies: IMovieCard[];
    page_result: IPagination;
};

const Content = ({ movies, page_result }: Props) => {
    return (
        <Stack>
            <Box>
                {movies &&
                    movies?.map(movie => {
                        return <MovieFilterCard key={movie?.id} movie={movie} total_result={page_result.total_results} />;
                    })}
            </Box>
            {page_result?.total_pages > 1 && <Pagination total={page_result?.total_pages} />}
        </Stack>
    );
};

export default Content;
