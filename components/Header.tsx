import { Burger, Container, Group, Header as MantineHeader, Text, Title } from "@mantine/core";
import { useState } from "react";

import Search from "./Search";

const Header = ({}) => {
    const [open, setOpen] = useState(false);

    return (
        <MantineHeader height={70}>
            <Container size={"xl"}>
                <Group noWrap position='apart' h={70}>
                    <Group>
                        <Burger opened={open} onClick={() => setOpen(!open)} color='#a1a1a1' size={18} />

                        <Title order={2} c='blue'>
                            Flixnet
                        </Title>
                    </Group>

                    <Search />
                    <Group>
                        {/* <ThemeToggle /> */}
                        <Text fw={700}>Login</Text>
                    </Group>
                </Group>
            </Container>
        </MantineHeader>
    );
};

export default Header;
