import { MantineTheme, Select as MantineSelect } from "@mantine/core";
import { blue_1 } from "../../theme/colors";

type SelectValue = {
    label: string;
    value: string;
};

// remove ? value from onChange
interface Props {
    options?: SelectValue[];
    onChange?: (e: unknown) => void;
    value?: SelectValue | unknown;
    name?: string;
}

const Select = ({ options, onChange, value, name }: Props) => {
    return (
        <>
            <MantineSelect defaultValue='All Genres' data={["All Genres", "React", "Angular", "Svelte", "Vue"]} styles={selectStyle} />
        </>
    );
};

export default Select;

const selectStyle = (theme: MantineTheme) => ({
    dropdown: {},
    item: {
        "&[data-selected]": {
            background: blue_1,
            color: "white",
            "&, &:hover": {
                backgroundColor: blue_1,
            },
        },
    },
    // nothingFound: {},
    // separator: {},
    // separatorLabel: {},
    // itemsWrapper: {},
    // wrapper: {},
    // invalid: {},
    // disabled: {},
    // icon: {},
    // withlcon: {},
    // input: {},
    // rightSection: {},
    // root: {},
    // label: {},
});
