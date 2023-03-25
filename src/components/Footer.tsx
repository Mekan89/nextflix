import { Container, Footer as MantineFooter, Group, Text } from "@mantine/core";
import Link from "next/link";

import { navLink } from "../theme/styles";

const Footer = ({}) => {
    return (
        <MantineFooter height={110}>
            <Container px={{ base: 20, sm: 40 }}>
                <Group position='apart' h={110}>
                    <Text component={Link} href='/' fz={26} c='blue.8' fw='bold'>
                        NEXTFLIX
                    </Text>
                    <Group spacing='xl'>
                        <Text component={Link} href='/movies' sx={navLink}>
                            Movies
                        </Text>
                        <Text component={Link} href='/tv' sx={navLink}>
                            TV Shows
                        </Text>
                        <Text component={Link} href='/cartoons' sx={navLink}>
                            Cartoons
                        </Text>
                    </Group>
                    <Text c='dimmed' size='sm'>
                        &#169; {new Date().getFullYear()} NEXTFLIX
                    </Text>
                </Group>
            </Container>
        </MantineFooter>
    );
};

export default Footer;
