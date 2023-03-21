import { ActionIcon, createStyles, Flex, Group, Image, Tabs, Text, Title } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { blue_1, white_1 } from "../theme/colors";

const FilmTab = ({}) => {
    const [activeTab, setActiveTab] = useState<string | null>("description");
    const { classes, cx } = useStyles();

    return (
        <Tabs
            // mt={160}
            // defaultValue='description'
            value={activeTab}
            onTabChange={setActiveTab}
            mb={150}
            classNames={{
                root: classes.root,
                tab: classes.tab,
                tabLabel: classes.tabLabel,
            }}>
            <Tabs.List>
                <Tabs.Tab value='description'>Description</Tabs.Tab>
                <Tabs.Tab value='actors'>Actors</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='description' py={20}>
                <Text c='dimmed'>Парень и его родители организуют поиски любимого пса, чтобы успеть дать ему жизненно необходимое лекарство.</Text>
            </Tabs.Panel>

            <Tabs.Panel value='actors' py={20} sx={{ overflowX: "hidden" }}>
                <Group position='apart' mb={40}>
                    <Title fz={26}>
                        Actors
                        <Text span c='dimmed' fw={500} ml={10}>
                            (27)
                        </Text>
                    </Title>

                    <Flex gap={15}>
                        <ActionIcon variant='outline' radius='lg' size='lg' className={classes.iconButton}>
                            <IconChevronLeft size={20} />
                        </ActionIcon>
                        <ActionIcon variant='outline' radius='lg' size='lg' className={classes.iconButton}>
                            <IconChevronRight size={20} />
                        </ActionIcon>
                    </Flex>
                </Group>
                <Group noWrap>
                    <Image src='/black.jpg' alt='Norway' radius='md' width={212} height={318} caption='Jon Jones' classNames={{ root: classes.root, caption: classes.caption }} />
                    <Image src='/black.jpg' alt='Norway' radius='md' width={212} height={318} caption='Jon Jones' classNames={{ root: classes.root, caption: classes.caption }} />
                </Group>
            </Tabs.Panel>
        </Tabs>
    );
};

export default FilmTab;

const useStyles = createStyles(theme => ({
    tab: {
        transition: "0.3s",

        "&:hover": {
            background: "transparent",
        },

        "&[data-active]": {
            // backgroundColor: "red",
            color: blue_1,
            borderColor: blue_1,
            "&:hover": {
                background: "transparent",
                color: blue_1,
                borderColor: blue_1,
            },
        },
    },

    tabLabel: {
        fontSize: 16,
    },

    root: {
        "&:hover img, &:hover>div:nth-of-type(2)": {
            transition: "0.3s",
            transform: "translateY(-4px)",
        },
    },
    caption: {
        color: "black",
        fontSize: 16,
        textAlign: "left",
        fontWeight: 500,
    },

    iconButton: {
        transition: "0.3s",
        borderColor: white_1,
        "&:hover": {
            color: "white",
            backgroundColor: blue_1,
        },
    },
}));
