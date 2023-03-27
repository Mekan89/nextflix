import { Container, createStyles, Flex, Stack, Text, UnstyledButton } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/router";
import useSWR from "swr";
import FilmInfo from "../../components/FilmInfo";
import FilmTab from "../../components/FilmTab";
import API, { fetcher } from "../../services/tmdbWrapper";

const Film = ({}) => {
    const { classes } = useStyles();
    const router = useRouter();
    const { id } = router?.query;

    const { data, isLoading } = useSWR(API.getSingleMovie(id), fetcher);

    console.log(data);

    const { title } = data;

    return (
        <Container px={{ base: 10, sm: 40 }} bg='white'>
            <UnstyledButton my={30}>
                <Flex align='center'>
                    <IconChevronLeft size={20} />
                    <Text>Back</Text>
                </Flex>
            </UnstyledButton>
            <Stack>
                <FilmInfo data={data} />

                <FilmTab data={data} />
            </Stack>
        </Container>
    );
};

export default Film;

const useStyles = createStyles(theme => ({}));
