import { AppShell, MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import theme from "../theme";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head />
            <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
                <AppShell padding={0} header={<Header />} footer={<Footer />}>
                    <Component {...pageProps} />
                </AppShell>
            </MantineProvider>
        </>
    );
}
