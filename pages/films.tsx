import { Container, Grid, Text, Title } from "@mantine/core";
import Content from "../components/Content";
import Filters from "../components/Filters";

const Films = ({}) => {
    return (
        <Container px={40} py={50} bg='white'>
            <Title lh={1.8}>All films</Title>
            <Text>A selection of films from all over the world</Text>

            <Grid mt={40}>
                <Grid.Col maw={270}>
                    <Filters />
                </Grid.Col>
                <Grid.Col span='auto' ml={60}>
                    {/* <Content data={data} isLoading={isLoading} isFetching={isFetching} /> */}
                    <Content />
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Films;
