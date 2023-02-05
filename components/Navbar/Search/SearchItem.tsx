import { Box, createStyles, Group, Image, Text } from "@mantine/core";
import Link from "next/link";
import { dark_2 } from "../../../theme/colors";
import Rating from "../../Rating";

const SearchItem = ({}) => {
    const { classes, cx } = useStyles();

    return (
        <Box href='#' component={Link} className={classes.wrapper}>
            <Group align='start' noWrap>
                <Image src='/black.jpg' alt='Norway' radius='md' width={45} height={70} />
                <Box c='white' w='100%'>
                    <Text lineClamp={2} className={classes.title}>
                        BTS Permission:
                    </Text>
                    <Text fz={14} span>
                        2022, 195 min.
                    </Text>
                </Box>
                <Rating className={classes.rating} rating={5.9} />
            </Group>
        </Box>
    );
};

export default SearchItem;

const useStyles = createStyles(theme => ({
    wrapper: {
        display: "block",
        padding: "10px 15px",
        transition: "0.3s",
        ":hover": {
            backgroundColor: dark_2,
        },
    },

    rating: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: "auto",
    },
    title: {
        fontWeight: "bold",
        wordBreak: "break-all",
    },
}));
