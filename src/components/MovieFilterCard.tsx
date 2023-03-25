import { Button, createStyles, Divider, Group, Image, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBookmark } from "@tabler/icons-react";
import Link from "next/link";
import { gray_1, white_1 } from "../theme/colors";
import { IMovieCard } from "../types";

import Rating from "./Rating";

type Props = {
    movie: IMovieCard;
};

const MovieFilterCard = ({ movie }: Props) => {
    const { classes } = useStyles();
    const isMobile = useMediaQuery("max-width: 48em");
    const { id, name, year, url, description, vote, type } = movie;

    return (
        <>
            <Divider color={white_1} display={{ base: "none", md: "block" }} />
            <Link href={"film/" + id} className={classes.wrapper}>
                <Group noWrap px={{ base: 0, md: 25 }} py={25}>
                    <Image src={url} alt={name} radius='md' width={70} height={100} />
                    <Stack maw={430} spacing={4} mb='auto'>
                        <Title order={4} lineClamp={1}>
                            {name}
                        </Title>
                        <Text fz={{ base: 14, sm: 16 }} span>
                            {year?.substring(0, 4)}
                        </Text>
                        <Text lineClamp={2} fz={14} c='dimmed'>
                            {description}
                        </Text>
                    </Stack>

                    <Group position={isMobile ? "center" : "right"} ml='auto'>
                        <Rating className={classes.rating} rating={vote} />
                        <Button leftIcon={<IconBookmark fill={gray_1} size={16} />} className={classes.button}>
                            Watchlist
                        </Button>
                    </Group>
                </Group>
            </Link>
        </>
    );
};

export default MovieFilterCard;

const useStyles = createStyles(theme => ({
    wrapper: {
        display: "block",
        transition: "0.3s",
        [theme.fn.largerThan("md")]: {
            "&:hover": {
                boxShadow: "0 2px 25px rgba(0,0,0, 0.1)",
            },
        },
    },
    rating: {
        fontSize: 18,
        fontWeight: "bold",
    },
    button: {
        color: gray_1,
        borderColor: gray_1,
        fontSize: 14,
        background: "transparent",
        padding: "8px 12px",
        height: "fit-content",
        "&:hover": {
            background: "rgba(0,0,0,0.1)",
        },
        [theme.fn.smallerThan("sm")]: {
            padding: 10,
            [`& .mantine-Button-leftIcon`]: {
                margin: 0,
            },

            [`& .mantine-Button-label`]: {
                display: "none",
            },
        },
    },
}));
