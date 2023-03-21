import { Box, MantineTheme, Pagination as MantinePagination, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { blue_1 } from "../theme/colors";

interface Props {
    page: number;
    onChange: () => void;
    total: number;
}

const Pagination = ({ page, onChange, total }: Props) => {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

    return (
        <Box px={{ base: 0, md: 25 }}>
            <MantinePagination page={page} onChange={onChange} total={total} styles={pagination} withEdges={!isMobile} position={isMobile ? "center" : "left"} />
        </Box>
    );
};

export default Pagination;

const pagination = (theme: MantineTheme) => ({
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
});
