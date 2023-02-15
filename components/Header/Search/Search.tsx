import { Group, Input, MantineTheme, Stack } from "@mantine/core";
import { useDebouncedValue, useInputState, useMediaQuery } from "@mantine/hooks";
import { IconChevronLeft, IconSearch, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { gray_2 } from "../../../theme/colors";
import SearchList from "./SearchList";

const searchInput = (theme: MantineTheme) => ({
    wrapper: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },
    input: {
        backgroundColor: gray_2,
        color: "#ffffff",
        borderColor: gray_2,
        // [theme.fn.smallerThan("md")]: {
        //     display: "none",
        // },
    },
    rightSection: {
        color: "white",
    },
});

const Search = ({}) => {
    const [visible, setVisible] = useState(false);
    const isMobile = useMediaQuery("max-width: 600px");
    const [query, setQuery] = useInputState("");
    // const [query, setQuery] = useAtom(queryAtom);
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
            <Stack pos='relative' w={{ base: "100%", sm: 430 }}>
                <Group c='#fff'>
                    {isMobile && <IconChevronLeft />}
                    <Input
                        styles={searchInput}
                        icon={<IconSearch size={16} />}
                        placeholder='Search'
                        w='100%'
                        value={query}
                        // onChange={e => setQuery(e.target.value)}
                        onChange={setQuery}
                        maxLength={50}
                        rightSection={query.trim() ? <IconX size={18} /> : <></>}
                        // onKeyPress={onKeyPress}
                    />
                </Group>
                {isMobile ? <IconSearch size={20} /> : null}
                {query.trim() ? <SearchList /> : null}
            </Stack>
        </>
    );
};

export default Search;
