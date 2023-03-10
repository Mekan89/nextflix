import { ActionIcon, createStyles, Group, Input, Stack, useMantineTheme } from "@mantine/core";
import { useDebouncedValue, useInputState, useMediaQuery } from "@mantine/hooks";
import { IconChevronLeft, IconSearch, IconX } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { useRef } from "react";
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
    const ref = useRef<HTMLInputElement>(null);
    const [value, setValue] = useInputState("");
    // const [query, setQuery] = useAtom(queryAtom);
    const debouncedQuery = useDebouncedValue(value, 500);

    const handleVisibility = () => {
        setVisible(false);
        setValue("");
    };

    console.log(isMobile);

    const handleClick = () => {
        if (isMobile) {
            ref.current?.focus();
            setVisible(true);
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
            <Stack pos='relative' w={{ base: "100%", sm: 430 }}>
                <Group c='#fff' spacing={1}>
                    {visible === isMobile && (
                        <ActionIcon onClick={handleVisibility} variant='transparent'>
                            <IconChevronLeft color='white' />
                        </ActionIcon>
                    )}
                    {visible === isMobile && (
                        <Input
                            classNames={{
                                wrapper: classes.wrapper,
                                input: classes.input,
                                rightSection: classes.rightSection,
                            }}
                            placeholder='Search'
                            // display={{ base: visible ? "flex" : "none", sm: "flex" }}
                            value={value}
                            onChange={setValue}
                            // autoFocus={visible}
                            maxLength={100}
                            autoFocus
                            ref={ref}
                            rightSection={value.trim() && <IconX size={18} color='white' onClick={() => setValue("")} />}
                            // onChange={e => setQuery(e.target.value)}
                            // onBlur={handleVisibility}
                            // onKeyPress={onKeyPress}
                        />
                    )}

                    {!visible && (
                        <ActionIcon onClick={handleClick} ml='auto' variant='transparent'>
                            <IconSearch size={20} color='white' />
                        </ActionIcon>
                    )}
                </Group>
                {value.trim() && <SearchList />}
            </Stack>
        </>
    );
};

export default Search;
