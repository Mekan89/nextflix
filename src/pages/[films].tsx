import { Button, Container, Grid, LoadingOverlay, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconAdjustments } from "@tabler/icons-react";
import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { filterAtom, page, query, queryType } from "../atoms";
import Content from "../components/Content";
import Filters from "../components/Filters";
import Modal from "../components/Modal";
import useFetch from "../hooks/useFetch";
import API from "../services/tmdbWrapper";

const Movies = () => {
    const isTablet = useMediaQuery("(max-width:64em)");
    const setFilterView = useSetAtom(filterAtom);
    const router = useRouter();
    const keyword = useAtomValue(query);
    const pageTo = useAtomValue(page);
    const type = useAtomValue(queryType);

    // const { films, name } = router.query;

    //@ts-ignore
    const { movies, isLoading, page_result } = useFetch(API.searchMovie(keyword, API[type], pageTo));

    return (
        <Container px={{ base: 10, sm: 40 }} pt={50} pb={120} bg='white'>
            <Title fz={40}>All movies</Title>
            <Text my={20}>A selection of movies from all over the world</Text>
            {isTablet && (
                <>
                    <Button variant='filled' onClick={() => setFilterView(true)} leftIcon={<IconAdjustments size={20} />}>
                        Filter
                    </Button>
                    <Modal>
                        <Filters />
                    </Modal>
                </>
            )}

            <Grid mt={{ base: 20, md: 40 }}>
                {!isTablet && (
                    <Grid.Col maw={270}>
                        <Filters />
                    </Grid.Col>
                )}
                <Grid.Col span='auto' ml={{ base: 0, md: 60 }}>
                    {!movies ? <LoadingOverlay visible /> : <Content movies={movies} page_result={page_result} />}
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Movies;
