import { useState } from "react";

const BurgerMenu = ({}) => {
    const [opened, setOpened] = useState(false);

    return (
        // <Menu width={260} position='right-end' offset={14} onClose={() => setOpened(false)} onOpen={() => setOpened(true)} opened={opened}>
        //     <Menu.Target>H</Menu.Target>
        //     <DropdownMenu />
        // </Menu>
        <div>BurgerMenu</div>
    );
};

export default BurgerMenu;
