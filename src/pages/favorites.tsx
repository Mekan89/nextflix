import { Container, Text, Title } from "@mantine/core";
import useFavorites from "hooks/useFavorites";
import Content from "../components/Content";

export const Favourites = () => {
    const { favorites } = useFavorites();
    // const { filters } = useTypedSelector((state) => state.filtersReducer);
    // const { page } = useTypedSelector((state) => state.paginationReducer);
    const query = favorites.map(el => `search=${el}&field=id`).join("&");
    // const { data, isLoading, isFetching } = useGetFavouritesQuery({ page, filters, query });

    return (
        <Container px={{ base: 10, sm: 40 }} pt={50} pb={120} bg='white'>
            <Title fz={40}>Favorites</Title>
            <Text my={20}>List of favorite movies</Text>

            {/* <Content data={data} isLoading={isLoading} isFetching={isFetching} /> */}
            <Content />
        </Container>

        // 			{query ? (
        // 				<Content data={data} isLoading={isLoading} isFetching={isFetching} />
        // 			) : (
        // 				<Subtitle>Список избранного пуст</Subtitle>
        // 			)}
    );
};
