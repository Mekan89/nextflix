import { ActionIcon, createStyles, Stack, Text } from "@mantine/core";
import { Icon24Hours, IconHeart, IconHome, IconMasksTheater, IconMovie } from "@tabler/icons";
import { IconProps } from "../types";

export const useStyles = createStyles(theme => ({
    footer: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
        marginBottom: "env(safe-area-inset-bottom, 50px)",
    },
    icons: {
        height: "100%",
    },
    icon: {
        color: theme.colors.gray[5],
    },
    iconActive: {
        color: theme.colors.blue[7],
    },
    title: {
        color: theme.colors.gray[5],
    },
    titleActive: {
        color: theme.colors.blue[7],
    },
    link: {
        textDecoration: "none",
    },
}));

const items: IconProps[] = [
    { title: "Home", to: "/", icon: <IconHome /> },
    { title: "Movies", to: "/movies", icon: <IconMasksTheater /> },
    { title: "Series", to: "/series", icon: <Icon24Hours /> },
    { title: "Cartoons", to: "/cartoons", icon: <IconMovie /> },
    { title: "Favorites", to: "/favorites", icon: <IconHeart /> },
];

const BottomNavigation = ({}) => {
    // className={cx(classes.title, { [classes.titleActive]: isActive })}

    return (
        <>
            {items.map((el, i) => (
                <Stack align='center' spacing={0} key={i}>
                    <ActionIcon size={24}>{el.icon}</ActionIcon>

                    <Text size='xs'>{el.title}</Text>
                </Stack>
            ))}
        </>
    );
};

export default BottomNavigation;
