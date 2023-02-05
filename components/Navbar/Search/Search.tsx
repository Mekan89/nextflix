import { CSSObject, Group, Input, MantineTheme, MediaQuery, Stack } from "@mantine/core";
import { useDebouncedValue, useInputState, useMediaQuery } from "@mantine/hooks";
import { IconChevronLeft, IconSearch, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { gray_2 } from "../../../theme/colors";
import SearchList from "./SearchList";

const searchInput = (theme: MantineTheme): CSSObject => ({
    input: {
        backgroundColor: gray_2,
        color: "#ffffff",
        borderColor: gray_2,
    },
});

const Search = ({}) => {
    const [visible, setVisible] = useState(false);
    const isMobile = useMediaQuery("max-width: 600px");
    const [query, setQuery] = useInputState("");
    const debouncedQuery = useDebouncedValue(query, 500);

    console.log(debouncedQuery);

    // const findMovie = e => {
    //     if (value.trim() && isMobile) {
    //         setVisible(true);
    //     }
    // };
    // const onKeyPress = (e: React.KeyboardEvent) => {
    // 	if (e.key === 'Enter') {
    // 		onClickSignup();
    // 	}
    // };

    return (
        // <Flex sx={{ ml: { xs: "auto", md: 0 } }}>
        //     {visible && <ArrowBackIosIcon sx={{ display: { xs: "none", md: "block" } }} onClick={() => setVisible(false)} />}
        //     {visible && <TextField variant='standard' autoFocus={visible} onBlur={() => setVisible(false)} />}
        //     <OutlinedInput sx={{ display: { xs: "none", md: "block" }, width: { xs: 250, md: 350 } }} placeholder='Search...' />
        //     <IconButton onClick={findMovie}>
        //         <Search />
        //     </IconButton>
        // </Flex>
        <>
            {/* <Flex align='center' gap={3}> */}
            {/* <Flex direction='column' pos='relative' w={400}> */}
            <Stack pos='relative' w={430}>
                <Group ml={{ base: "auto", xs: 0 }} c='#fff'>
                    {isMobile && <IconChevronLeft />}
                    <MediaQuery smallerThan='xs' styles={{ display: "none" }}>
                        <Input
                            sx={searchInput}
                            icon={<IconSearch size={16} />}
                            placeholder='Search'
                            // w={{ xs: 300, md: 350 }}
                            w='100%'
                            // w='min(50vw, 25rem)'
                            value={query}
                            onChange={setQuery}
                            maxLength={50}
                            rightSection={query.trim() ? <IconX size={18} /> : <></>}
                            styles={{
                                rightSection: {
                                    width: 140,
                                    color: "white",
                                },
                                // icon: {
                                //     color: "red",
                                // },
                            }}
                            // onKeyPress={onKeyPress}
                        />
                        {/* <Input placeholder='Search' w={600} /> */}
                    </MediaQuery>
                    {/* <IconSearch size={20} /> */}
                </Group>
                <SearchList />
            </Stack>
        </>
    );
};

export default Search;
