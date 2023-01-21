import { createStyles, CSSObject, MantineTheme, Menu } from "@mantine/core";
import { Icon24Hours, IconHeart, IconHome, IconMasksTheater, IconMovie } from "@tabler/icons";
import { default as Link } from "next/link";
// import { useStyles } from "./BottomNavigation";

const dropdown = (theme: MantineTheme): CSSObject => ({
    background: "#1f1f1f",
    borderColor: "#1f1f1f",
});

const items = [
    { title: "Home", to: "/", icon: <IconHome /> },
    { title: "Movies", to: "/movies", icon: <IconMasksTheater /> },
    { title: "Series", to: "/series", icon: <Icon24Hours /> },
    { title: "Cartoons", to: "/cartoons", icon: <IconMovie /> },
    { title: "Favorites", to: "/favorites", icon: <IconHeart /> },
];

const item = (theme: MantineTheme): CSSObject => ({
    color: "#cecece",

    // "&:hover": {
    //     color: "#fff",
    // },
    // position: "absolute",
});

const useStyles = createStyles(theme => ({
    dropdown: {
        position: "absolute",
        top: 0,
        left: 0,
    },
}));

const Dropdown = ({}) => {
    const { classes } = useStyles();
    return (
        <Menu.Dropdown sx={dropdown} className={classes.dropdown}>
            <Menu.Label>Settings</Menu.Label>
            <Menu.Item icon={<IconHome size={18} />} sx={item} closeMenuOnClick component={Link} href='/'>
                Home
            </Menu.Item>
            <Menu.Item icon={<IconHome size={18} />} sx={item} closeMenuOnClick component={Link} href='/'>
                Account settings
            </Menu.Item>
            <Menu.Item icon={<IconHome size={18} />} sx={item} closeMenuOnClick component={Link} href='/'>
                Account settings
            </Menu.Item>
            <Menu.Item icon={<IconHome size={18} />} sx={item} closeMenuOnClick component={Link} href='/'>
                Account settings
            </Menu.Item>
        </Menu.Dropdown>
    );
};

export default Dropdown;
