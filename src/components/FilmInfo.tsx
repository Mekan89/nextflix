import { Box, Button, CSSObject, Flex, Group, Image, List, MantineTheme, Stack, Text, Title } from "@mantine/core";
import { IconBookmark, IconPlayerPlayFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { TMDB_IMAGE_ENDPOINT } from "../services/tmdbWrapper";
import { dark_2, white_1, white_2 } from "../theme/colors";
import { IMovie } from "../types";
import Rating from "./Rating";

type Props = {
    data: IMovie;
};

const FilmInfo = ({ data }: Props) => {
    const router = useRouter();

    const {
        backdrop_path,
        budget,
        revenue,
        runtime,
        genres,
        id,
        media_type,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        first_air_date,
        title,
        name,
        video,
        vote_average,
        vote_count,
        description,
        production_countries,
    } = data;

    return (
        <Flex direction={{ base: "column", sm: "row" }} gap={{ base: 21, md: 42 }} mb={20} mih={{ base: 950, sm: 500 }}>
            <Box pos='relative'>
                <Image src={`${TMDB_IMAGE_ENDPOINT}${backdrop_path}`} alt={title} radius='md' width={300} height={450} />
                <Rating rating={+vote_average.toFixed(1)} className={rating} />
            </Box>
            <Stack w='100%' display='block'>
                <Title>{original_title}</Title>
                <Group my={30}>
                    <Button leftIcon={<IconPlayerPlayFilled fill={dark_2} size={16} />} radius='xl' px={20} py={12}>
                        Watch
                    </Button>
                    <Button leftIcon={<IconBookmark fill={dark_2} size={18} />} radius='xl' sx={button} px={20} py={12}>
                        Watchlist
                    </Button>
                </Group>
                <Title order={3} mb={15}>
                    About:
                </Title>

                <List listStyleType='none' size={15} spacing={20} display='inline-block' pos='unset'>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            Country :
                        </Text>
                        <Text span c={dark_2}>
                            {production_countries[0].name}
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            Genre:
                        </Text>
                        {genres.map(({ id, name }) => (
                            <Link key={id} href={`/movies?{id}`} color={dark_2}>
                                {name + " "}
                            </Link>
                        ))}
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            Release date:
                        </Text>
                        <Text span c={dark_2}>
                            {release_date}
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            Budget:
                        </Text>
                        <Text span c={dark_2}>
                            {budget.toLocaleString()}
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            Length:
                        </Text>
                        <Text span c={dark_2}>
                            {runtime} minutes
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            USA income:
                        </Text>
                        <Text span c={dark_2}>
                            {revenue.toLocaleString()}
                        </Text>
                    </List.Item>
                </List>
            </Stack>
        </Flex>
    );
};

export default FilmInfo;

const rating = (theme: MantineTheme): CSSObject => ({
    position: "absolute",
    top: theme.spacing.md,
    left: theme.spacing.md,
    width: 37,
    display: "flex",
    justifyContent: "center",
    background: "green",
    color: theme.white,
    fontWeight: "bold",
    padding: "5px 10px",
    borderRadius: theme.radius.md,
});

const button = (theme: MantineTheme): CSSObject => ({
    color: dark_2,
    background: white_2,
    "&:hover": {
        background: white_1,
    },
});
