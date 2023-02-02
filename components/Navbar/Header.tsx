import { Container, Group, Header as MantineHeader, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { navLink } from "../../theme/styles";
import BurgerMenu from "./BurgerMenu";
import Search from "./Search/Search";

const Header = ({}) => {
    // const { classes } = useStyles();
    // const [scroll] = useWindowScroll();
    const isTablet = useMediaQuery("(min-width: 768px)");

    return (
        <MantineHeader height={70}>
            <Container>
                <Group noWrap position='apart' h={70} pos='relative'>
                    <Group>
                        {isTablet && <BurgerMenu />}
                        <Text component={Link} href='/' fz={26} c='blue.8' fw='bold'>
                            NEXTFLIX
                        </Text>
                    </Group>

                    <Search />
                    <Group>
                        <Text fz={18} sx={navLink}>
                            Login
                        </Text>
                    </Group>
                </Group>
            </Container>
        </MantineHeader>
    );
};

export default Header;
