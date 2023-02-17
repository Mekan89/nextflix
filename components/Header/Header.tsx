import { Container, Group, Header as MantineHeader, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useAtom } from "jotai";
import Link from "next/link";
import { activeSearchAtom } from "../../atoms";
import { navLink } from "../../theme/styles";
import BurgerMenu from "./BurgerMenu";
import Search from "./Search/Search";

const Header = ({}) => {
    // const { classes } = useStyles();
    // const [scroll] = useWindowScroll();
    const [visible, setVisible] = useAtom(activeSearchAtom);

    const theme = useMantineTheme();
    const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

    // const visible = useAtomValue(activeSearchAtom);

    return (
        <MantineHeader height={70}>
            <Container px={{ base: 10, sm: 40 }}>
                <Group noWrap position='apart' h={70} pos='relative'>
                    <Group>
                        {!isMobile && <BurgerMenu />}

                        <Text component={Link} href='/' fz={26} c='blue.8' fw='bold' display={{ base: visible ? "none" : "block", sm: "block" }}>
                            NEXTFLIX
                        </Text>
                    </Group>

                    <Search />

                    <Group>
                        <Text fz={18} sx={navLink} display={{ base: visible ? "none" : "block", sm: "block" }}>
                            Login
                        </Text>
                    </Group>
                </Group>
            </Container>
        </MantineHeader>
    );
};

export default Header;
