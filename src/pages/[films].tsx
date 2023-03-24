import { Button, Container, Grid, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconAdjustments } from "@tabler/icons-react";
import { useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { filterAtom } from "../atoms";
import Content from "../components/Content";
import Filters from "../components/Filters";
import Modal from "../components/Modal";
import useFetch from "../hooks/useFetch";
import API from "../services/tmdbWrapper";

const Movies = () => {
    const theme = useMantineTheme();
    const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.md}em)`);
    const setFilterView = useSetAtom(filterAtom);
    const router = useRouter();
    const path = router.asPath;
    let url = API[path];
    const { movies, mutate, size, setSize, isValidating, isLoading } = useFetch(url);

    console.log(path);

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
                    {/* <Content data={data} isLoading={isLoading} isFetching={isFetching} /> */}
                    <Content />
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Movies;
