import { Container, Footer as MantineFooter, Group, Text, Title } from "@mantine/core";
import { navLink } from "../theme/styles";

const Footer = ({}) => {
    return (
        <MantineFooter height={80}>
            <Container size='xl'>
                <Group position='apart' h={80}>
                    <Title order={2} fw='bold' c='blue'>
                        Flixnet
                    </Title>
                    <Group spacing='xl'>
                        <Text component='a' fw='bold' sx={navLink}>
                            Movies
                        </Text>
                        <Text component='a' fw='bold' sx={navLink}>
                            Series
                        </Text>
                        <Text component='a' fw='bold' sx={navLink}>
                            Cartoons
                        </Text>
                    </Group>
                    <Text c='dimmed'>&#169; {new Date().getFullYear()} Flixnet</Text>
                </Group>
            </Container>
        </MantineFooter>
    );
};

export default Footer;
