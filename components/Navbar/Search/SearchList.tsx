import { createStyles, Paper } from "@mantine/core";
import { useState } from "react";
import { dark_1, dark_2, gray_3 } from "../../../theme/colors";

const SearchList = ({}) => {
    const [activeTab, setActiveTab] = useState<string | null>("films");
    const { classes, cx } = useStyles();

    return (
        <Paper bg='#333' className={classes.wrapper}>
            {/* <Tabs
            keepMounted={false}
            defaultValue='films'
            variant='outline'
            classNames={{ root: classes.root, tabsList: classes.tabsList, tab: classes.tab, panel: classes.panel }}
            value={activeTab}
            onTabChange={setActiveTab}>
            <Tabs.List grow>
                <Tabs.Tab value='films'> Films</Tabs.Tab>
                <Tabs.Tab value='series'>Series</Tabs.Tab>
                <Tabs.Tab value='cartoons'> Cartoons</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='films'>
                <ScrollArea.Autosize maxHeight='60vh' mih={300} type='always' offsetScrollbars>
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </ScrollArea.Autosize>
            </Tabs.Panel>
            <Tabs.Panel value='series'>Second panel</Tabs.Panel>
            <Tabs.Panel value='cartoons'>Third panel</Tabs.Panel>

            <Box py={10} px={15} fz={14} fw='bold' c='gray.3' bg={dark_2} sx={{ ":hover": { backgroundColor: "black" } }}>
                Show All
            </Box>
        </Tabs> */}
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
    root: {},
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
    panel: {
        // height: 300,
        // maxHeight: "500px",
        // height: "max(fit-content, 500px)",
        // overflowY: "scroll",
        // scrollbarWidth: 2,
        // scrollbarColor: dark_2,
    },
}));
