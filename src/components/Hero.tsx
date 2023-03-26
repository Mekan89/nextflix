import { Box, Button, Container, createStyles, LoadingOverlay, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import API, { fetcher, TMDB_IMAGE_ENDPOINT } from "../services/tmdbWrapper";

const Hero = ({}) => {
    const { classes } = useStyles();
    const { data, isLoading } = useSWR(API.topRated, fetcher);

    const random = Math.floor(Math.random() * 20);
    console.log(data);

    if (isLoading) {
        return <LoadingOverlay visible />;
    }
    const { id, overview, title, poster_path, backdrop_path } = data?.results[random];

    return (
        <Box className={classes.heroSection}>
            <Image src={`${TMDB_IMAGE_ENDPOINT}/${backdrop_path}`} fill alt={title} />
            <Container px={{ base: 20, sm: 40 }}>
                <Stack spacing={35} c='white' className={classes.heroContent}>
                    <Title order={1}>{title}</Title>
                    {/* {movie? movie.overview : ""} */}
                    <Text>{overview}</Text>
                    <Button component={Link} href={`film/${id}`} rightIcon={<IconArrowRight size={19} />}>
                        More
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;

const useStyles = createStyles(theme => ({
    heroSection: {
        height: "470px",
        width: "99.5vw",
        position: "relative",
        // backgroundImage: "url(/bg1.jpg)",
        backgroundPosition: "center 20%",
        backgroundSize: "cover",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
    },
    heroContent: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        marginLeft: 10,
        alignItems: "flex-start",
        justifyContent: "center",
        height: "450px",
        maxWidth: "460px",
        width: "100%",
    },
}));
