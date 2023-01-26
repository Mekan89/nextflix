import { Group, Input, MediaQuery } from "@mantine/core";
import { useDebouncedValue, useInputState, useMediaQuery } from "@mantine/hooks";
import { IconChevronLeft, IconSearch, IconX } from "@tabler/icons";
import { useState } from "react";
import { searchInput } from "../../theme/styles";

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
            <Group ml={{ base: "auto", xs: 0 }} c='#fff'>
                {isMobile && <IconChevronLeft />}
                <MediaQuery smallerThan='xs' styles={{ display: "none" }}>
                    <Input
                        sx={searchInput}
                        icon={<IconSearch size={16} />}
                        placeholder='Search'
                        // w={{ xs: 230, sm: 350 }}
                        w='min(30vw, 20rem)'
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
        </>
    );
};

export default Search;
