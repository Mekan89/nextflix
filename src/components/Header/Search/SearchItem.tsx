import { Box, createStyles, Group, Image, Text } from "@mantine/core";
import Link from "next/link";
import { dark_2 } from "../../../theme/colors";
import { IMovieCard } from "../../../types";
import Rating from "../../Rating";

const SearchItem = (props: IMovieCard) => {
    const { classes, cx } = useStyles();
    const { id, name, url, vote, year } = props;

    console.log(url);

    return (
        <Box href={`film/${id}`} component={Link} className={classes.wrapper}>
            <Group align='start' noWrap>
                <Image src={url} alt={name} radius='md' width={45} height={70} />
                <Box c='white' w='100%'>
                    <Text lineClamp={2} className={classes.title}>
                        {name}
                    </Text>
                    <Text fz={14} span>
                        {year}
                    </Text>
                </Box>
                <Rating className={classes.rating} rating={vote} />
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
