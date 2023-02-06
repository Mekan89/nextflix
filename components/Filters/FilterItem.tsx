import { Accordion, createStyles } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

interface Props {
    name: string;
    children: React.ReactNode;
}

// { values, onChange, step, min, max }
const FilterItem = ({ name, children }: Props) => {
    // const [rangeValue, setRangeValue] = useState<[number, number]>([0, 10]);
    const { classes, cx } = useStyles();

    const MARK = [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }];

    return (
        <Accordion
            defaultValue={["rating", "Years between", "Genre", "Released year"]}
            multiple
            chevron={<IconChevronDown size={20} />}
            classNames={{
                item: classes.item,
                control: classes.control,
                label: classes.label,
                icon: classes.icon,
                content: classes.content,
            }}>
            <Accordion.Item value='rating'>
                <Accordion.Control mb={10} px={0} py={7}>
                    {name}
                </Accordion.Control>
                <Accordion.Panel>{children}</Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
};

export default FilterItem;

const useStyles = createStyles(theme => ({
    item: {
        border: 0,
        "&[data-active]": {
            marginBottom: 40,
        },
    },

    control: {
        "&:hover": {
            background: "none",
        },
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,
    },
    icon: {
        margin: 0,
    },
    content: {
        padding: 0,
    },
}));
