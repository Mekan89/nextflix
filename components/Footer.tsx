import { Container, Footer as MantineFooter, Group, Text } from "@mantine/core";
import Link from "next/link";
import { navLink } from "../theme/styles";

const Footer = ({}) => {
    return (
        <MantineFooter height={100}>
            <Container>
                <Group position='apart' h={100}>
                    <Text component={Link} href='/' fz={26} c='blue.8' fw='bold'>
                        NEXTFLIX
                    </Text>
                    <Group spacing='xl'>
                        <Text component='a' sx={navLink}>
                            Movies
                        </Text>
                        <Text component='a' sx={navLink}>
                            Series
                        </Text>
                        <Text component='a' sx={navLink}>
                            Cartoons
                        </Text>
                    </Group>
                    <Text c='dimmed' size='sm'>
                        &#169; {new Date().getFullYear()} Flixnet
                    </Text>
                </Group>
            </Container>
        </MantineFooter>
    );
};

export default Footer;
