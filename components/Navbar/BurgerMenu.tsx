import { Box, Burger, createStyles, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Icon24Hours, IconHeart, IconHome, IconMasksTheater, IconMovie } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { blue_1, dark_2 } from "../../theme/colors";
import { isActive } from "../../theme/styles";

const items = [
    { title: "Home", route: "/", icon: <IconHome size={24} /> },
    { title: "Movies", route: "/movies", icon: <IconMasksTheater size={24} /> },
    { title: "Series", route: "/series", icon: <Icon24Hours size={24} /> },
    { title: "Cartoons", route: "/cartoons", icon: <IconMovie size={24} /> },
    { title: "Favorites", route: "/favorites", icon: <IconHeart size={24} /> },
];

const BurgerMenu = ({}) => {
    const [opened, { close, toggle, open }] = useDisclosure(false);
    const pathname = usePathname();
    const { classes, cx } = useStyles();

    return (
        <Menu
            width={200}
            offset={20}
            position='top-start'
            onClose={close}
            onOpen={open}
            opened={opened}
            classNames={{
                dropdown: classes.dropdown,
                item: classes.item,
                itemIcon: classes.itemIcon,
            }}>
            <Menu.Target>
                <Burger opened={opened} color='#a1a1a1' size={18} />
            </Menu.Target>

            <Menu.Dropdown>
                {items.map(({ title, route, icon }, index) => {
                    const isCurrent = route === pathname;

                    return (
                        <Menu.Item key={index} icon={<Box sx={isCurrent ? isActive : undefined}>{icon}</Box>} href={route} component={Link}>
                            {title}
                        </Menu.Item>
                    );
                })}
            </Menu.Dropdown>
        </Menu>
    );
};

export default BurgerMenu;

const useStyles = createStyles(() => ({
    dropdown: {
        background: dark_2,
        border: 0,
    },
    item: {
        background: dark_2,
        color: "#d3d3d3",
        transition: "0.3s",
        "&[data-hovered]": {
            background: "transparent",
            color: "white",
            fontWeight: "bold",
            ".mantine-Menu-itemIcon::after": {
                transform: "scaleX(1)",
            },
        },
    },
    itemIcon: {
        position: "relative",
        "::after": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: 3,
            bottom: -7,
            left: 0,
            backgroundColor: blue_1,
            transformOrigin: "bottom left",
            transition: "transform 0.2s ease-out",
            transform: "scaleX(0)",
        },
    },
}));

//         // transform: props ? "scaleX(1)" : "scaleX(0)",
// active: {
//     ".mantine-Menu-itemIcon::after": {
//         // itemIcon: {
//         // "&::after": {
//         transform: "scaleX(1)",
//         // },
//     },
// },
// className={cx(classes.preview, classNames?.preview)}
// sx={isCurrent ? isActive : classes.itemIcon}
// <Box className={cx(classes.itemIcon, { [classes.active]: isCurrent })}>
// <Box className={cx(classes.itemIcon, isCurrent ? classes.active : "")}>
// <Box className={cx(classes.itemIcon, { [classes.active]: isCurrent })}>
// <Box className={({isCurrent}) =>(classes.itemIcon(isCurrent)})/
//   clazzName={({ isActive }) => cx(classes.link, { [classes.linkActive]: isActive,})}}
// <Box className={({ isCurrent }) => cx(classes.itemIcon, { [classes.active]: isCurrent })}>
// <Box className={cx(classes.itemIcon, isCurrent && 'transform: "scaleX(1)"')}>
// <Box className={cx(classes.itemIcon, { [classes.active]: isCurrent })}>
// <Box className={cx(classes.itemIcon, { "transform: scaleX(1)": isCurrent })}>
// <Box className={cx(classes.itemIcon, isCurrent && classes.active)}>
// <Box sx={isCurrent ? isActive : classes.itemIcon}>
// <Box className={cx(classes.itemIcon, { [classes.active]: isCurrent })}>{icon}</Box>
