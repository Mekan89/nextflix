import { Flex, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Footer from "./Footer";
import BottomNavigation from "./Navbar/BottomNavigation";
import Header from "./Navbar/Header";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

    return (
        <Flex direction='column' h='100vh'>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            {isMobile ? <BottomNavigation /> : <Footer />}
        </Flex>
    );
};

export default Layout;
