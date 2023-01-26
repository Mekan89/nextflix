import { ActionIcon, createStyles, Group, Stack, Text } from "@mantine/core";
import { Icon24Hours, IconHeart, IconHome, IconMasksTheater, IconMovie } from "@tabler/icons";
import { usePathname } from "next/navigation";
import { useState } from "react";

const useStyles = createStyles(theme => ({
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

const items = [
    { title: "Home", route: "/", icon: <IconHome size={30} /> },
    { title: "Movies", route: "/movies", icon: <IconMasksTheater size={30} /> },
    { title: "Series", route: "/series", icon: <Icon24Hours size={30} /> },
    { title: "Cartoons", route: "/cartoons", icon: <IconMovie size={30} /> },
    { title: "Favorites", route: "/favorites", icon: <IconHeart size={30} /> },
];
const BottomNavigation = ({}) => {
    const pathname = usePathname();
    const [value, setValue] = useState("movies");

    console.log(pathname);

    return (
        <Group bg='#141414' grow pos='sticky' bottom={0}>
            {items.map(({ title, route, icon }, i) => {
                const isCurrenPage = pathname === route;

                return (
                    <Stack align='center' spacing={0} key={i} py={20} sx={{ cursor: "pointer" }}>
                        <ActionIcon c={isCurrenPage ? "#ffffff" : "#a1a1a1"}>{icon}</ActionIcon>
                        <Text c={isCurrenPage ? "#ffffff" : "#a1a1a1"} size='sm'>
                            {title}
                        </Text>
                    </Stack>
                );
            })}
        </Group>
    );
};

export default BottomNavigation;

{
    /* 
 <Stack align='center' spacing={0} key={i} py={20} c='#a1a1a1' sx={{ cursor: "pointer" }}>
            <ActionIcon>{el.icon}</ActionIcon>
            <Text size='sm'>{el.title}</Text> 
</Stack>    
 */
}

// const BottomNavbar = ({}) => {
//     const [value, setValue] = useState("movies");

//     return (
//         <BottomNavigation showLabels sx={{ width: "100%", position: "fixed", bottom: 0, left: 0 }} value={value} onChange={(event, newValue) => setValue(newValue)}>
//             {items.map(({ title, icon }) => (
//                 <BottomNavigationAction key={title} label={title} icon={icon} />
//             ))}
//         </BottomNavigation>
//     );
// };

{
    /* <NavLink
                    key={i}
                    label={el.title}
                    icon={el.icon}
                    //  active ={isActive}
                    active
                    component={Link}
                    href={el.to}
                    sx={{ display: "block", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#fff" }}
                /> */
}
