import { ActionIcon, CSSObject, Group, MantineTheme, Stack, Text } from "@mantine/core";
import { Icon24Hours, IconHeart, IconHome, IconMasksTheater, IconMovie } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const items = [
    { title: "Home", route: "/", icon: <IconHome size={23} /> },
    { title: "Movies", route: "/movies", icon: <IconMasksTheater size={23} /> },
    { title: "TV Shows", route: "/tv", icon: <Icon24Hours size={23} /> },
    { title: "Cartoons", route: "/cartoons", icon: <IconMovie size={23} /> },
    { title: "Favorites", route: "/favorites", icon: <IconHeart size={23} /> },
];

const BottomNavigation = ({}) => {
    const pathname = usePathname();
    const [value, setValue] = useState("movies");

    return (
        <Group bg='#141414' grow pos='fixed' right={0} left={0} bottom={0} py={15}>
            {items.map(({ title, route, icon }, i) => {
                const isCurrenPage = pathname === route;

                return (
                    <Stack align='center' spacing={0} key={i} sx={bottomNavbar}>
                        <ActionIcon variant='transparent' c={isCurrenPage ? "white" : "dimmed"}>
                            {icon}
                        </ActionIcon>
                        <Text c={isCurrenPage ? "white" : "dimmed"} size='sm'>
                            {title}
                        </Text>
                    </Stack>
                );
            })}
        </Group>
    );
};

export default BottomNavigation;

const bottomNavbar = (theme: MantineTheme, props?: any): CSSObject => ({
    cursor: "pointer",
    "&:hover": {
        svg: {
            stroke: "white",
        },
        ".mantine-Text-root": {
            color: "white",
        },
    },
});
