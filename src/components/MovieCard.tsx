import { Badge, Col, createStyles, Group, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import Link from "next/link";
import Rating from "./Rating";

interface Props {
    id: number;
    name: string;
    year: string;
    url: string;
    vote: number;
    type: string;
}

const MovieCard = (props: Props) => {
    const { classes } = useStyles();
    const isTablet = useMediaQuery("(max-width: 64em)");

    const { id, name, year, url, vote, type } = props;

    return (
        <Col span={6} xs={4} sm={3} md={2.4} className={classes.wrapper}>
            <Link href={`/film/${id}`}>
                <Image src={url} alt='Norway' radius='md' fit='cover' height={isTablet ? 280 : 350} />
                <Rating className={classes.badge} rating={vote} />
                <Text weight={700} truncate mt='sm'>
                    {name}
                </Text>
                <Group mt='xs'>
                    <Text fz='sm' fw={500} c='dimmed' mt={-2}>
                        {year?.substring(0, 4)}
                    </Text>
                    <Badge color='pink' variant='light'>
                        {type}
                    </Badge>
                </Group>
            </Link>
        </Col>
        // <Col span={6} xs={4} sm={3} md={2.4} className={classes.wrapper}>
        //     <Link href={`/film/${id}`}>
        //         <Image src={`${TMDB_IMAGE_ENDPOINT}${backdrop_path}`} alt='Norway' radius='md' fit='cover' height={isTablet ? 280 : 350} />
        //         <Rating className={classes.badge} rating={+vote_average.toFixed(1)} />
        //         <Text weight={700} truncate mt='sm'>
        //             {original_title}
        //         </Text>
        //         <Group mt='xs'>
        //             <Text fz='sm' fw={500} c='dimmed' mt={-2}>
        //                 {release_date?.substring(0, 4)}
        //             </Text>
        //             <Badge color='pink' variant='light'>
        //                 {media_type}
        //             </Badge>
        //         </Group>
        //     </Link>
        // </Col>
    );
};

export default MovieCard;

const useStyles = createStyles(theme => ({
    wrapper: {
        marginBottom: theme.spacing.xl,
        position: "relative",
        cursor: "pointer",
        display: "block",
        "&:hover img, &:hover>div:nth-of-type(2)": {
            transition: "0.3s",
            transform: "translateY(-4px)",
            filter: "brightness(70%)",
        },
    },
    badge: {
        position: "absolute",
        top: theme.spacing.md,
        left: theme.spacing.md,
        color: theme.white,
        fontWeight: "bold",
        borderRadius: theme.radius.md,
        width: 37,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        background: "green",
        padding: "5px 10px",
    },
}));
