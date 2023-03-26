import { Box, Pagination as MantinePagination } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useAtom } from "jotai";
import { page } from "../atoms";
import { blue_1 } from "../theme/colors";

interface Props {
    total: number;
}

const Pagination = ({ total }: Props) => {
    const [activePage, setPage] = useAtom(page);
    const isMobile = useMediaQuery("(max-width: 48em)");

    return (
        <Box px={{ base: 0, md: 25 }} mt='auto'>
            <MantinePagination value={activePage} onChange={setPage} total={total} style={pagination} withEdges={!isMobile} position={isMobile ? "center" : "left"} />
        </Box>
    );
};

export default Pagination;

const pagination = {
    item: {
        transition: "0.3s",
        "&[data-active]": {
            background: blue_1,
        },
        "&:not(:disabled):hover": {
            color: "white",
            backgroundColor: blue_1,
        },
    },
};
