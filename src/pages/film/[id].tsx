import { Container, createStyles, Flex, Stack, Text, UnstyledButton } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import FilmInfo from "../../components/FilmInfo";
import FilmTab from "../../components/FilmTab";

const Film = ({}) => {
    const { classes, cx } = useStyles();

    return (
        <Container px={{ base: 10, sm: 40 }} bg='white'>
            <UnstyledButton my={30}>
                <Flex align='center'>
                    <IconChevronLeft size={20} />
                    <Text>Back</Text>
                </Flex>
            </UnstyledButton>
            <Stack>
                <FilmInfo />

                <FilmTab />
            </Stack>
        </Container>
    );
};

export default Film;

const useStyles = createStyles(theme => ({}));
