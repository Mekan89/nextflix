import { ActionIcon, useMantineTheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";

const ThemeToggle = ({}) => {
    // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();

    return (
        <ActionIcon variant='outline' color={colorScheme === "dark" ? "yellow" : "blue"} mx={{ md: 10 }} onClick={() => toggleColorScheme()} title='Toggle color scheme'>
            {colorScheme === "dark" ? <IconSun style={{ width: 18, height: 18 }} /> : <IconMoonStars style={{ width: 18, height: 18 }} />}
        </ActionIcon>
    );
};

export default ThemeToggle;
