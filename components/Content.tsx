import { Box, Pagination } from "@mantine/core";
import MovieFilterCard from "./MovieFilterCard";

const Content = ({}) => {
    return (
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
            <Pagination total={5200} />
        </Box>
    );
};

export default Content;

// <Image layout='fill' />/
// imageContainer: {
//     position: 'relative',
// 	width: 32,
// 	height: 48,
// 	flex-shrink: 0,
// 	display: 'block',
// 	border-radius: 5,
// 	overflow: 'hidden',
// }
