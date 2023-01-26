import { Burger, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Icon24Hours, IconHeart, IconHome, IconMasksTheater, IconMovie } from "@tabler/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActive } from "../../theme/styles";

const items = [
    { title: "Home", route: "/", icon: <IconHome size={24} /> },
    { title: "Movies", route: "/movies", icon: <IconMasksTheater size={24} /> },
    { title: "Series", route: "/series", icon: <Icon24Hours size={24} /> },
    { title: "Cartoons", route: "/cartoons", icon: <IconMovie size={24} /> },
    { title: "Favorites", route: "/favorites", icon: <IconHeart size={24} /> },
];

const BurgerMenu = ({}) => {
    const [opened, { close, toggle, open }] = useDisclosure(false);
    const pathname = usePathname();

    return (
        <Menu shadow='md' trigger='click' width={200} offset={20} position='top-end' onClose={close} onOpen={open} opened={opened}>
            <Menu.Target>
                <Burger opened={opened} color='#a1a1a1' size={18} />
            </Menu.Target>
            <Menu.Dropdown>
                {items.map(({ title, route, icon }, index) => {
                    const isCurrent = route === pathname;
                    return (
                        <Menu.Item sx={isActive} key={index} icon={icon} href={route} component={Link}>
                            {title}
                        </Menu.Item>
                    );
                })}
            </Menu.Dropdown>
        </Menu>
    );
};

export default BurgerMenu;
