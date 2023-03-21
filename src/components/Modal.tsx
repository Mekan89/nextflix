import { Modal as MantineModal, Title } from "@mantine/core";
import { useAtom } from "jotai";
import { filterAtom } from "../atoms";

const Modal = ({ children }: { children: React.ReactNode }) => {
    const [opened, setOpened] = useAtom(filterAtom);

    return (
        <MantineModal title={<Title order={4}>Filters selected:</Title>} centered size={450} opened={opened} onClose={() => setOpened(false)}>
            {children}
        </MantineModal>
    );
};

export default Modal;
