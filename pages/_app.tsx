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
import { AppProps } from "next/app";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import theme from "../theme";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
>>>>>>> 624d06a (movie app main page)

    return (
        <>
            <Head />
<<<<<<< HEAD
            <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
                <AppShell header={<Header />} footer={isMobile ? <BottomNavigation /> : <Footer />}>
=======
            <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
                <AppShell padding={0} header={<Header />} footer={<Footer />}>
>>>>>>> 624d06a (movie app main page)
                    <Component {...pageProps} />
                </AppShell>
            </MantineProvider>
        </>
    );
}
