import { MantineProvider, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { AppProps } from "next/app";

import { Provider } from "jotai";
import Head from "../components/Head";
import Layout from "../components/Layout";
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
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>

                    {/* <AppShell header={<Header />} footer={isMobile ? <BottomNavigation /> : <Footer />}>
                        <Component {...pageProps} />
                    </AppShell> */}
                </MantineProvider>
            </Provider>
        </>
    );
}
