<<<<<<< HEAD
<<<<<<< HEAD
import { AppShell, MantineProvider, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { AppProps } from "next/app";
import BottomNavigation from "../components/BottomNavigation";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import mantineTheme from "../theme";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
=======
import { AppShell, MantineProvider } from "@mantine/core";
=======
import { AppShell, MantineProvider, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
>>>>>>> a1cb2a4 (movie app main page)
import { AppProps } from "next/app";
import BottomNavigation from "../components/BottomNavigation";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import mantineTheme from "../theme";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
<<<<<<< HEAD
>>>>>>> 624d06a (movie app main page)
=======
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
>>>>>>> a1cb2a4 (movie app main page)

    return (
        <>
            <Head />
<<<<<<< HEAD
<<<<<<< HEAD
            <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
                <AppShell header={<Header />} footer={isMobile ? <BottomNavigation /> : <Footer />}>
=======
            <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
                <AppShell padding={0} header={<Header />} footer={<Footer />}>
>>>>>>> 624d06a (movie app main page)
=======
            <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
<<<<<<< HEAD
                <AppShell padding={0} header={<Header />} footer={isMobile ? <BottomNavigation /> : <Footer />}>
>>>>>>> a1cb2a4 (movie app main page)
=======
                <AppShell header={<Header />} footer={isMobile ? <BottomNavigation /> : <Footer />}>
>>>>>>> 12a5725 (movie app main page)
                    <Component {...pageProps} />
                </AppShell>
            </MantineProvider>
        </>
    );
}
