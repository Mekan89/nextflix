import { Badge, Col, createStyles, Group, Image, Text } from "@mantine/core";
import Link from "next/link";
import { TMDB_IMAGE_ENDPOINT } from "../services/requests";
import { IMovie } from "../types";
import Rating from "./Rating";

// interface Props {
//     backdrop_path: string;
//     genre_ids: number[];
//     id: number;
//     media_type: string;
//     original_language: string;
//     original_title: string;
//     overview: string;
//     popularity: number;
//     poster_path: string;
//     release_date: string;
//     title: string;
//     video: boolean;
//     vote_average: number;
//     vote_count: number;
// }

const MovieCard = (props: IMovie) => {
    const { classes } = useStyles();

    const { backdrop_path, genre_ids, id, media_type, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count } =
        props;

    console.log(id);

    return (
        <Link href={`/film/${id}`} style={{ display: "block" }}>
            <Col span={6} xs={4} sm={3} md={2.4} className={classes.wrapper}>
                <Image src={`${TMDB_IMAGE_ENDPOINT}${backdrop_path}`} alt='Norway' radius='md' />
                <Rating className={classes.badge} rating={vote_average} />
                <Text weight={700} truncate mt='sm'>
                    {original_title}
                </Text>
                <Group mt='xs'>
                    <Text fz='sm' fw={500} c='dimmed' mt={-2}>
                        {release_date}
                    </Text>
                    <Badge color='pink' variant='light'>
                        {media_type}
                    </Badge>
                </Group>
            </Col>
        </Link>
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
