import { Container, Group, Header as MantineHeader, Text } from "@mantine/core";
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
    const isTablet = useMediaQuery("(max-width:64em)");
    const isMobile = useMediaQuery("(max-width:48em)");

    // const visible = useAtomValue(activeSearchAtom);
    console.log(isMobile);

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
