import { Box, createStyles, Paper, ScrollArea, Tabs } from "@mantine/core";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { dark_1, dark_2, gray_3 } from "../../../theme/colors";
import { IMovieCard } from "../../../types";
import SearchItem from "./SearchItem";

type Props = {
    setActiveTab: Dispatch<SetStateAction<string>>;
    activeTab: string;
    isLoading: boolean;
    movies: IMovieCard[];
};

// const SearchList = ({ activeTab, setActiveTab, isLoading, movies }: Props) => {
const SearchList = ({ activeTab, setActiveTab, isLoading, movies }: Props) => {
    const router = useRouter();
    const types = ["movie", "tv", "cartoons"];
    const { classes, cx } = useStyles();

    return (
        <Paper bg='#333' className={classes.wrapper} maw={{ base: "100%", sm: 400 }}>
            <Tabs
                // keepMounted={false}
                defaultValue='films'
                variant='outline'
                classNames={{ tabsList: classes.tabsList, tab: classes.tab }}
                value={activeTab}
                onTabChange={() => setActiveTab}>
                <Tabs.List grow>
                    {types.map(el => (
                        <Tabs.Tab key={el} value={el} onClick={() => setActiveTab(el)}>
                            {el}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>

                {types.map(el => (
                    <Tabs.Panel key={el} value={el}>
                        <ScrollArea.Autosize mah='60vh' mih={300} type='always' offsetScrollbars>
                            {movies?.map((el: IMovieCard) => (
                                <SearchItem {...el} key={el.id} />
                            ))}
                        </ScrollArea.Autosize>
                    </Tabs.Panel>
                ))}

                <Box
                    py={10}
                    px={15}
                    fz={14}
                    fw='bold'
                    c='gray.3'
                    bg={dark_2}
                    onClick={() => router.push(activeTab)}
                    sx={{ cursor: "pointer", ":hover": { backgroundColor: "black" } }}>
                    Show All
                </Box>
            </Tabs>
        </Paper>
    );
};

export default SearchList;

const useStyles = createStyles(theme => ({
    wrapper: {
        position: "absolute",
        width: "100%",
        top: 45,
        overflow: "hidden",
    },
    tabsList: {
        padding: 15,
        borderBottomColor: gray_3,
    },

    tab: {
        color: theme.colors.gray[3],
        background: dark_1,
        borderRadius: 0,
        fontWeight: "bold",
        padding: "12px 17px",
        border: 0,
        transition: "0.4s ease-out",
        "&[data-active]": {
            backgroundColor: "black",
        },
        "&[data-active]::before": {
            height: 0,
        },
        "&:hover:not([data-active])": {
            backgroundColor: dark_2,
        },
    },
}));
