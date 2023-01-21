<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a1cb2a4 (movie app main page)
import { Burger, Container, createStyles, Group, Header as MantineHeader, NavLink, Paper, Text, Transition } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import Link from "next/link";
import { navLink } from "../theme/styles";
<<<<<<< HEAD

import Search from "./Search";

// export const menu = (theme: MantineTheme): CSSObject => ({
// position: "absolute",
// top: 0,
// });

// const useStyles = createStyles(theme => ({
//     left: {
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         paddingTop: "22px",
//         paddingBottom: "22px",
//         "@media (max-width: 768px)": {
//             width: "100%",
//             padding: 0,
//         },
//     },

//     link: {
//         position: "relative",
//         fontSize: "18px",
//         lineHeight: "18px",
//         fontWeight: 500,
//         color: "#fff",
//         outline: "none",
//         transition: "color 0.3s",
//         "@media (max-width: 768px)": {
//             fontSize: "15px",
//             lineHeight: "15px",
//             marginRight: "8px",
//         },
//     },

//     "&:before": {
//         content: '""',
//         position: "absolute",
//         bottom: "-8px",
//         left: 0,
//         width: "100%",
//         height: "2.5px",
//         borderRadius: "5px",
//         backgroundColor: "#fff",
//         opacity: 0,
//         visibility: "hidden",
//         transition: "opacity 0.3s, visibility 0.3s",
//     },

//     '&:hover &:focusVisible' : {
//         '&:before': {
//             opacity: ,
//             visibility: 'visible',
//         },
//     },
//     '&:hover': {
//         color: '#fff',
//     },
// },
// }));

const useStyles = createStyles(theme => ({
    root: {
        // position: "sticky",
        // position: "fixed",
        // top: 0,
        zIndex: 1,
        transition: "top 0.2s ease-in-out",
        // transition: "0.5s",
    },

    dropdown: {
        position: "absolute",
        top: 70,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: "hidden",
        backgroundColor: "#000",

        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
}));

const Header = ({}) => {
    const [opened, { close, toggle, open }] = useDisclosure(false);
    const { classes } = useStyles();
    const [scroll] = useWindowScroll();

    // if(scroll.y>520)

    return (
        <MantineHeader height={70} className={classes.root} hidden={scroll.y > 450}>
            <Container>
                <Group noWrap position='apart' h={70} pos='relative'>
                    <Group>
                        {/* <Menu width={260} offset={14} onClose={close} onOpen={open} opened={opened} position='top-start'>
                            <Menu.Target>
                                <Burger opened={opened} onClick={toggle} color='#a1a1a1' size={18} />
                            </Menu.Target>
                            <Dropdown />
                        </Menu> */}
                        <Burger opened={opened} onClick={toggle} color='#a1a1a1' size={18} />

                        <Transition transition='pop-top-right' duration={200} mounted={opened}>
                            {styles => (
                                <Paper className={classes.dropdown} withBorder>
                                    <NavLink label='Home' py={8} px={6} />

                                    <NavLink label='Books' py={8} px={6} />

                                    <NavLink label='About' py={8} px={6} />

                                    <NavLink label='LogIn/Register' py={8} px={6} />
                                </Paper>
                            )}
                        </Transition>

                        <Text component={Link} href='/' fz={26} c='blue.8' fw='bold'>
                            NEXTFLIX
                        </Text>
=======
import { Burger, Container, Group, Header as MantineHeader, Text, Title } from "@mantine/core";
import { useState } from "react";
=======
>>>>>>> a1cb2a4 (movie app main page)

import Search from "./Search";

// export const menu = (theme: MantineTheme): CSSObject => ({
// position: "absolute",
// top: 0,
// });

// const useStyles = createStyles(theme => ({
//     left: {
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         paddingTop: "22px",
//         paddingBottom: "22px",
//         "@media (max-width: 768px)": {
//             width: "100%",
//             padding: 0,
//         },
//     },

//     link: {
//         position: "relative",
//         fontSize: "18px",
//         lineHeight: "18px",
//         fontWeight: 500,
//         color: "#fff",
//         outline: "none",
//         transition: "color 0.3s",
//         "@media (max-width: 768px)": {
//             fontSize: "15px",
//             lineHeight: "15px",
//             marginRight: "8px",
//         },
//     },

//     "&:before": {
//         content: '""',
//         position: "absolute",
//         bottom: "-8px",
//         left: 0,
//         width: "100%",
//         height: "2.5px",
//         borderRadius: "5px",
//         backgroundColor: "#fff",
//         opacity: 0,
//         visibility: "hidden",
//         transition: "opacity 0.3s, visibility 0.3s",
//     },

//     '&:hover &:focusVisible' : {
//         '&:before': {
//             opacity: ,
//             visibility: 'visible',
//         },
//     },
//     '&:hover': {
//         color: '#fff',
//     },
// },
// }));

const useStyles = createStyles(theme => ({
    root: {
        // position: "sticky",
        // position: "fixed",
        // top: 0,
        zIndex: 1,
        transition: "0.5s",
    },

    dropdown: {
        position: "absolute",
        top: 70,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: "hidden",
        backgroundColor: "#000",

        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
}));

const Header = ({}) => {
    const [opened, { close, toggle, open }] = useDisclosure(false);
    const { classes } = useStyles();
    const [scroll] = useWindowScroll();

    // if(scroll.y>520)

    return (
        <MantineHeader height={70} className={classes.root} hidden={scroll.y > 450}>
            <Container>
                <Group noWrap position='apart' h={70} pos='relative'>
                    <Group>
                        {/* <Menu width={260} offset={14} onClose={close} onOpen={open} opened={opened} position='top-start'>
                            <Menu.Target>
                                <Burger opened={opened} onClick={toggle} color='#a1a1a1' size={18} />
                            </Menu.Target>
                            <Dropdown />
                        </Menu> */}
                        <Burger opened={opened} onClick={toggle} color='#a1a1a1' size={18} />

<<<<<<< HEAD
                        <Title order={2} c='blue'>
                            Flixnet
                        </Title>
>>>>>>> 624d06a (movie app main page)
=======
                        <Transition transition='pop-top-right' duration={200} mounted={opened}>
                            {styles => (
                                <Paper className={classes.dropdown} withBorder>
                                    <NavLink label='Home' py={8} px={6} />

                                    <NavLink label='Books' py={8} px={6} />

                                    <NavLink label='About' py={8} px={6} />

                                    <NavLink label='LogIn/Register' py={8} px={6} />
                                </Paper>
                            )}
                        </Transition>

                        <Text component={Link} href='/' fz={26} c='blue.8' fw='bold'>
                            NEXTFLIX
                        </Text>
>>>>>>> a1cb2a4 (movie app main page)
                    </Group>

                    <Search />
                    <Group>
                        {/* <ThemeToggle /> */}
<<<<<<< HEAD
<<<<<<< HEAD
                        <Text sx={navLink}>Login</Text>
=======
                        <Text fw={700}>Login</Text>
>>>>>>> 624d06a (movie app main page)
=======
                        <Text sx={navLink}>Login</Text>
>>>>>>> a1cb2a4 (movie app main page)
                    </Group>
                </Group>
            </Container>
        </MantineHeader>
    );
};

export default Header;
