<<<<<<< HEAD
<<<<<<< HEAD
import { Container, Footer as MantineFooter, Group, Text } from "@mantine/core";
import Link from "next/link";
=======
import { Container, Footer as MantineFooter, Group, Text, Title } from "@mantine/core";
>>>>>>> 624d06a (movie app main page)
=======
import { Container, Footer as MantineFooter, Group, Text } from "@mantine/core";
import Link from "next/link";
>>>>>>> a1cb2a4 (movie app main page)
import { navLink } from "../theme/styles";

const Footer = ({}) => {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a1cb2a4 (movie app main page)
        <MantineFooter height={100}>
            <Container>
                <Group position='apart' h={100}>
                    <Text component={Link} href='/' fz={26} c='blue.8' fw='bold'>
                        NEXTFLIX
                    </Text>
<<<<<<< HEAD
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
=======
        <MantineFooter height={80}>
            <Container size='xl'>
                <Group position='apart' h={80}>
                    <Title order={2} fw='bold' c='blue'>
                        Flixnet
                    </Title>
=======
>>>>>>> a1cb2a4 (movie app main page)
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
<<<<<<< HEAD
                    <Text c='dimmed'>&#169; {new Date().getFullYear()} Flixnet</Text>
>>>>>>> 624d06a (movie app main page)
=======
                    <Text c='dimmed' size='sm'>
                        &#169; {new Date().getFullYear()} Flixnet
                    </Text>
>>>>>>> a1cb2a4 (movie app main page)
                </Group>
            </Container>
        </MantineFooter>
    );
};

export default Footer;
