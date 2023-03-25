import { ActionIcon, Box, createStyles, Group, Input, Stack } from "@mantine/core";
import { useClickOutside, useDebouncedValue, useMediaQuery } from "@mantine/hooks";
import { IconChevronLeft, IconSearch, IconX } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useState } from "react";
import { activeSearchAtom, query, queryType } from "../../../atoms";
import useFetch from "../../../hooks/useFetch";
import API from "../../../services/tmdbWrapper";
import { blue_1, gray_2 } from "../../../theme/colors";
import SearchList from "./SearchList";

// const searchInput = (theme: MantineTheme) => ({
const useStyles = createStyles(theme => ({
    wrapper: {
        flex: "1 1 0",
        [theme.fn.smallerThan("sm")]: {
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
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));
    const router = useRouter();
    const isMobile = useMediaQuery("(max-width:48em)");
    const [keyword, setKeyword] = useAtom(query);
    const [type, setType] = useAtom(queryType);
    const debouncedQuery = useDebouncedValue(keyword, 500);
    const { movies, mutate, size, setSize, isValidating, isLoading } = useFetch(API.getMovieList(debouncedQuery[0], type));
    const showOnly = keyword.trim() && opened && router.pathname == "/";

    console.log(ref);

    const handleVisibility = () => {
        if (isMobile) {
            setVisible(!visible);
            setKeyword("");
        }
    };

    // const onKeyPress = (e: React.KeyboardEvent) => {
    // 	if (e.key === 'Enter') {
    // 		onClickSignup();
    // 	}
    // };

    return (
        <Stack pos='relative' w={{ base: "100%", sm: 430 }} mah={30}>
            <Group c='#fff' spacing={1}>
                {visible && (
                    <ActionIcon onClick={handleVisibility} variant='transparent'>
                        <IconChevronLeft color='white' />
                    </ActionIcon>
                )}
                {!visible && (
                    <Input
                        classNames={{
                            wrapper: classes.wrapper,
                            input: classes.input,
                            rightSection: classes.rightSection,
                        }}
                        placeholder='Search'
                        value={keyword}
                        onChange={e => setKeyword(e.target.value)}
                        onClick={() => setOpened(() => true)}
                        autoFocus={visible}
                        maxLength={100}
                        rightSection={keyword.trim() && <IconX size={18} color='white' onClick={() => setKeyword("")} />}
                    />
                )}

                {!visible && (
                    <ActionIcon onClick={handleVisibility} ml='auto' variant='transparent'>
                        <IconSearch size={20} color='white' />
                    </ActionIcon>
                )}
            </Group>
            {/* @ts-ignore */}
            <Box ref={ref}>{showOnly && <SearchList movies={movies} isLoading={isLoading} setOpened={() => setOpened(false)} />}</Box>
        </Stack>
    );
};

export default Search;
