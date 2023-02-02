import { Box, createStyles, CSSObject, Group, Image, MantineTheme, Text } from "@mantine/core";
import Link from "next/link";
import { dark_2 } from "../../../theme/colors";
import Rating from "../../Rating";

const SearchItem = ({}) => {
    return (
        <Box href='#' component={Link} sx={wrapper}>
            <Group align='start' noWrap>
                <Image src='/black.jpg' alt='Norway' radius='md' width={45} height={70} />
                <Box c='white' w='100%'>
                    <Text lineClamp={2} fw='bold'>
                        BTS Permission
                    </Text>
                    <Text fz={14} component='span'>
                        2022, 195 min.
                    </Text>
                </Box>
                <Rating className={rating} rating={5.9} />
            </Group>
        </Box>
    );
};

export default SearchItem;

export const rating = (theme: MantineTheme): CSSObject => ({
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "auto",
});

export const wrapper = (theme: MantineTheme): CSSObject => ({
    display: "block",
    padding: "10px 15px",
    transition: "0.3s",
    ":hover": {
        backgroundColor: dark_2,
    },
});

const useStyles = createStyles(theme => ({}));
