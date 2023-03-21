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
        <Stack pos='relative' w={{ base: "100%", sm: 430 }}>
            <Group c='#fff' spacing={1}>
                {visible && (
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
                        value={value}
                        onChange={setValue}
                        autoFocus={visible}
                        maxLength={100}
                        rightSection={value.trim() && <IconX size={18} color='white' onClick={() => setValue("")} />}
                        // onChange={e => setQuery(e.target.value)}
                        // onKeyPress={onKeyPress}
                    />
                )}

                {!visible && (
                    <ActionIcon onClick={handleVisibility} ml='auto' variant='transparent'>
                        <IconSearch size={20} color='white' />
                    </ActionIcon>
                )}
            </Group>
            {value.trim() && <SearchList />}
        </Stack>
    );
};

export default Search;
