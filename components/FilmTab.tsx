import { Tabs } from "@mantine/core";
import { IconMessageCircle, IconPhoto } from "@tabler/icons-react";

const FilmTab = ({}) => {
    return (
        <Tabs mt={160}>
            <Tabs.List>
                <Tabs.Tab value='gallery' icon={<IconPhoto size={14} />}>
                    Gallery
                </Tabs.Tab>
                <Tabs.Tab value='messages' icon={<IconMessageCircle size={14} />}>
                    Messages
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='gallery' pt='xs'>
                Gallery tab content
            </Tabs.Panel>

            <Tabs.Panel value='messages' pt='xs'>
                Messages tab content
            </Tabs.Panel>
        </Tabs>
    );
};

export default FilmTab;
