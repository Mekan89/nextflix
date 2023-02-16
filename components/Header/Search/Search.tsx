import { ActionIcon, createStyles, Group, Input, Stack, useMantineTheme } from "@mantine/core";
import { useDebouncedValue, useInputState, useMediaQuery } from "@mantine/hooks";
import { IconChevronLeft, IconSearch, IconX } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { activeSearchAtom } from "../../../atoms";
import { blue_1, gray_2 } from "../../../theme/colors";
import SearchList from "./SearchList";

// const searchInput = (theme: MantineTheme) => ({
const useStyles = createStyles(theme => ({
    wrapper: {
        flex: "1 1 0",
        // flexGrow: 1,
        // backgroundColor: "red",
        [theme.fn.smallerThan("sm")]: {
            // display: "none",
            "&:focus-within": {
                border: "none",
                borderBottom: `1px solid ${blue_1}`,
            },
        },
    },
    input: {
        backgroundColor: gray_2,
        color: "#ffffff",
        borderColor: gray_2,

        // width: "100%",
        [theme.fn.smallerThan("sm")]: {
            // display: "none",
            // outline: "none",

            background: "transparent",
            border: "none",
        },
        // [theme.fn.smallerThan("md")]: {
        //     display: "none",
        // },
    },
    withIcon: {},
    rightSection: {
        cursor: "pointer",
    },
    //     color: "white",
    //     // pointerEvents: "none",
    //     [theme.fn.smallerThan("sm")]: {
    //         display: "none",
    //     },
    // },
    // icon: {
    //     cursor: "pointer",
    // },
}));

const Search = ({}) => {
    const { classes, cx } = useStyles();
    const [visible, setVisible] = useAtom(activeSearchAtom);
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

    const [value, setValue] = useInputState("");
    // const [query, setQuery] = useAtom(queryAtom);
    const debouncedQuery = useDebouncedValue(value, 500);

    const handleVisibility = () => {
        if (isMobile) {
            setVisible(!visible);
            setValue("");
        }
    };

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

            {/* {!isMobile && ( */}
            <Stack pos='relative' w={{ base: "100%", sm: 410 }}>
                <Group c='#fff' spacing={1}>
                    {/* {isMobile && (
                        <ActionIcon onClick={() => setVisible(true)} bg='red'>
                            <IconChevronLeft />
                        </ActionIcon>
                    )} */}

                    {visible && (
                        <ActionIcon onClick={handleVisibility} variant='transparent'>
                            {/* <IconChevronLeft color='white' onClick={handleVisibility} /> */}
                            <IconChevronLeft color='white' />
                        </ActionIcon>
                    )}
                    <Input
                        // icon={!isMobile ? <IconSearch size={16} /> : undefined}
                        classNames={{
                            wrapper: classes.wrapper,
                            input: classes.input,
                            rightSection: classes.rightSection,
                        }}
                        placeholder='Search'
                        display={{ base: visible ? "flex" : "none", sm: "flex" }}
                        value={value}
                        // onChange={e => setQuery(e.target.value)}
                        onChange={setValue}
                        // onBlur={handleVisibility}
                        autoFocus
                        maxLength={100}
                        rightSection={value.trim() && <IconX size={18} color='white' onClick={() => setValue("")} />}
                        // onKeyPress={onKeyPress}
                    />
                    {!visible && (
                        <ActionIcon onClick={handleVisibility} bg='red' ml='auto'>
                            <IconSearch size={20} />
                        </ActionIcon>
                    )}
                </Group>
                {value.trim() && <SearchList />}
            </Stack>
        </>
    );
};

export default Search;
