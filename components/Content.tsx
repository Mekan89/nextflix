import { Box, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import MovieFilterCard from "./MovieFilterCard";
import Pagination from "./Pagination";

const Content = ({}) => {
    const [activePage, setPage] = useState(1);
    const isMobile = useMediaQuery("(max-width: 600px)");
    return (
        <Stack>
            <Box>
                <MovieFilterCard />
                <MovieFilterCard />
                <MovieFilterCard />
                <MovieFilterCard />
                <MovieFilterCard />
                <MovieFilterCard />
                <MovieFilterCard />
                <MovieFilterCard />
                <MovieFilterCard />
                <MovieFilterCard />
            </Box>
            <Pagination page={activePage} onChange={() => setPage} total={500} />
        </Stack>
    );
};

export default Content;
