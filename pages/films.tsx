import { Container, Grid, Text, Title } from "@mantine/core";
import Filter from "../components/Filters/Filters";

const Films = ({}) => {
    return (
        <Container px={40} py={50} bg='white' h='100vh'>
            <Title lh={1.8}>All films</Title>
            <Text>A selection of films from all over the world</Text>

            <Grid mt={40}>
                <Grid.Col maw={270}>
                    <Filter />
                </Grid.Col>
                <Grid.Col span='auto' bg='red.2'>
                    <Text>Rest</Text>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Films;
