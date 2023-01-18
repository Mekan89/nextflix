<<<<<<< HEAD
import { ActionIcon, createStyles, Group, Stack, Text } from "@mantine/core";
import { Icon24Hours, IconHeart, IconHome, IconMasksTheater, IconMovie } from "@tabler/icons";

const useStyles = createStyles(theme => ({
=======
import { ActionIcon, createStyles, Stack, Text } from "@mantine/core";
import { Icon24Hours, IconHeart, IconHome, IconMasksTheater, IconMovie } from "@tabler/icons";
import { IconProps } from "../types";

export const useStyles = createStyles(theme => ({
>>>>>>> 624d06a (movie app main page)
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

<<<<<<< HEAD
const items = [
    { title: "Home", to: "/", icon: <IconHome size={30} /> },
    { title: "Movies", to: "/movies", icon: <IconMasksTheater size={30} /> },
    { title: "Series", to: "/series", icon: <Icon24Hours size={30} /> },
    { title: "Cartoons", to: "/cartoons", icon: <IconMovie size={30} /> },
    { title: "Favorites", to: "/favorites", icon: <IconHeart size={30} /> },
=======
const items: IconProps[] = [
    { title: "Home", to: "/", icon: <IconHome /> },
    { title: "Movies", to: "/movies", icon: <IconMasksTheater /> },
    { title: "Series", to: "/series", icon: <Icon24Hours /> },
    { title: "Cartoons", to: "/cartoons", icon: <IconMovie /> },
    { title: "Favorites", to: "/favorites", icon: <IconHeart /> },
>>>>>>> 624d06a (movie app main page)
];

const BottomNavigation = ({}) => {
    // className={cx(classes.title, { [classes.titleActive]: isActive })}

    return (
<<<<<<< HEAD
        <Group bg='#141414' grow>
            {items.map((el, i) => (
                <Stack align='center' spacing={0} key={i} py={20} c='#a1a1a1' sx={{ cursor: "pointer" }}>
                    {/* // <NavLink
                //     key={i}
                //     label={el.title}
                //     icon={el.icon}
                //     active
                //     component={Link}
                //     href={el.to}
                //     sx={{ flexDirection: "column", alignContent: "center", justifyItems: "center", justifyContent: "center", display: "block",  }}
                // /> */}

                    <ActionIcon>{el.icon}</ActionIcon>

                    <Text size='sm'>{el.title}</Text>
                </Stack>
            ))}
        </Group>
=======
        <>
            {items.map((el, i) => (
                <Stack align='center' spacing={0} key={i}>
                    <ActionIcon size={24}>{el.icon}</ActionIcon>

                    <Text size='xs'>{el.title}</Text>
                </Stack>
            ))}
        </>
>>>>>>> 624d06a (movie app main page)
    );
};

export default BottomNavigation;
<<<<<<< HEAD

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
=======
>>>>>>> 624d06a (movie app main page)
