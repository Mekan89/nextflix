import { createStyles, Modal as MantineModal, Title } from "@mantine/core";
import { useAtom } from "jotai";
import { filterAtom } from "../atoms";

const Modal = ({ children }: { children: React.ReactNode }) => {
    const [opened, setOpened] = useAtom(filterAtom);
    const { classes, cx } = useStyles();

    return (
        <MantineModal
            title={<Title order={4}>Filters selected:</Title>}
            centered
            size={450}
            opened={opened}
            onClose={() => setOpened(false)}
            classNames={{
                root: classes.root,
                inner: classes.inner,
                modal: classes.modal,
                header: classes.header,
                overlay: classes.overlay,
                title: classes.title,
                body: classes.body,
                close: classes.close,
            }}>
            {children}
        </MantineModal>
    );
};

export default Modal;

// const Drawer = ({ children }: { children: React.ReactNode }) => {
//     // const [opened, setOpened] = useState(false);
//     const [opened, setOpened] = useAtom(filterAtom);
//     const { classes, cx } = useStyles();

//     return (
//         <MantineDrawer
//             opened={opened}
//             onClose={() => setOpened(false)}
//             classNames={{
//                 root: classes.root,
//                 overlay: classes.overlay,
//                 drawer: classes.drawer,
//                 header: classes.header,
//                 body: classes.body,
//                 title: classes.title,
//                 closeButton: classes.closeButton,
//             }}>
//             {children}
//         </MantineDrawer>
//     );
// };

// export default Drawer;

// const Drawer = ({ children }: { children: React.ReactNode }) => {
//     // const [opened, setOpened] = useState(false);
//     const [opened, setOpened] = useAtom(filterAtom);
//     const { classes, cx } = useStyles();

//     // opened={opened} onClose={() => setOpened(false)}

//     return (
//         <Popover width={350} trapFocus position='bottom' withArrow shadow='md' classNames={{ dropdown: classes.dropdown, target: classes.target }}>
//             <Popover.Target>
//                 <Button sx={btnOutlined} leftIcon={<IconAdjustments size={20} />}>
//                     Filter
//                 </Button>
//             </Popover.Target>
//             <Popover.Dropdown>{children}</Popover.Dropdown>
//         </Popover>
//     );
// };

// export default Drawer;

// const useStyles = createStyles(theme => ({
//     root: {
//         padding: "30px 40px",
//     },
//     overlay: {},
//     drawer: {
//         height: "80vh",
//         top: 200,
//     },
//     header: {},
//     body: {},
//     title: {},
//     closeButton: {},
// }));

const useStyles = createStyles(theme => ({
    root: {},
    inner: {},
    modal: {},
    header: {},
    overlay: {},
    title: {},
    body: {},
    close: {},
}));
