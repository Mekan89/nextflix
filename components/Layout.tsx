import { Box, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Footer from "./Footer";
import BottomNavigation from "./Header/BottomNavigation";
import Header from "./Header/Header";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

    return (
        <Box
            mih='100vh'
            style={{
                display: "grid",
                gridTemplateColumns: "100%",
                gridTemplateRows: "auto 1fr auto",
            }}>
            <Header />
            <main>{children}</main>
            {isMobile ? <BottomNavigation /> : <Footer />}
        </Box>
    );
};

export default Layout;
