import { Group, Input, MediaQuery } from "@mantine/core";
<<<<<<< HEAD
import { useDebouncedValue, useInputState, useMediaQuery } from "@mantine/hooks";
import { IconChevronLeft, IconSearch, IconX } from "@tabler/icons";
import { useState } from "react";
import { searchInput } from "../theme/styles";
=======
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronLeft, IconSearch, IconX } from "@tabler/icons";
import { useState } from "react";
>>>>>>> 624d06a (movie app main page)

const Search = ({}) => {
    const [visible, setVisible] = useState(false);
    const isMobile = useMediaQuery("max-width: 600px");
<<<<<<< HEAD
    const [query, setQuery] = useInputState("");
    const debouncedQuery = useDebouncedValue(query, 500);

    console.log(debouncedQuery);
=======
    const [value, setValue] = useState("");
>>>>>>> 624d06a (movie app main page)

    // const findMovie = e => {
    //     if (value.trim() && isMobile) {
    //         setVisible(true);
    //     }
    // };

<<<<<<< HEAD
    // const onKeyPress = (e: React.KeyboardEvent) => {
    // 	if (e.key === 'Enter') {
    // 		onClickSignup();
    // 	}
    // };

=======
>>>>>>> 624d06a (movie app main page)
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
<<<<<<< HEAD
                        sx={searchInput}
                        icon={<IconSearch size={16} />}
                        placeholder='Search'
                        w={{ xs: 230, sm: 350 }}
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
=======
                        icon={<IconSearch size={16} />}
                        placeholder='Search'
                        w={{ xs: 230, sm: 350 }}
                        onChange={e => setValue(e.target.value)}
                        maxLength={50}
                        rightSection={value.trim() ? <IconX size={18} /> : <></>}
>>>>>>> 624d06a (movie app main page)
                    />
                    {/* <Input placeholder='Search' w={600} /> */}
                </MediaQuery>
                {/* <IconSearch size={20} /> */}
            </Group>
        </>
    );
};

export default Search;
