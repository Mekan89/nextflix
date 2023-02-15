import { Container, Group, Header as MantineHeader, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { visibilityAtom } from "../../atoms";
import { navLink } from "../../theme/styles";
import BurgerMenu from "./BurgerMenu";
import Search from "./Search/Search";

const Header = ({}) => {
    // const { classes } = useStyles();
    // const [scroll] = useWindowScroll();
    const theme = useMantineTheme();
    const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

    const visible = useAtomValue(visibilityAtom);

    return (
        <MantineHeader height={70}>
            <Container>
                <Group noWrap position='apart' h={70} pos='relative'>
                    <Group>
                        {!isMobile ? <BurgerMenu /> : null}
                        {visible ? (
                            <Text component={Link} href='/' fz={26} c='blue.8' fw='bold'>
                                NEXTFLIX
                            </Text>
                        ) : null}
                    </Group>

                    <Search />
                    <Group>
                        {visible ? (
                            <Text fz={18} sx={navLink}>
                                Login
                            </Text>
                        ) : null}
                    </Group>
                </Group>
            </Container>
        </MantineHeader>
    );
};

export default Header;
