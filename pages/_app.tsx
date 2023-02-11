import { AppShell, MantineProvider, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { AppProps } from "next/app";
import BottomNavigation from "../components/Navbar/BottomNavigation";

import { Provider } from "jotai";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Navbar/Header";
import mantineTheme from "../theme";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

    return (
        <>
            <Head />
            <Provider>
                <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
                    <AppShell header={<Header />} footer={isMobile ? <BottomNavigation /> : <Footer />}>
                        <Component {...pageProps} />
                    </AppShell>
                </MantineProvider>
            </Provider>
        </>
    );
}
