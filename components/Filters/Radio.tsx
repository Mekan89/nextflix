import { MantineTheme, Radio as MantineRadio } from "@mantine/core";
import { blue_4 } from "../../theme/colors";

// interface Props {
//     value: string;
// }

const Radio = ({}) => {
    return (
        <MantineRadio.Group value='New to Old'>
            <MantineRadio value='New to Old' label='New to Old' styles={radioStyles} />
            <MantineRadio value='Old to New' label='Old to New' styles={radioStyles} />
        </MantineRadio.Group>
    );
};

export default Radio;

export const radioStyles = (theme: MantineTheme) => ({
    root: {},
    body: {},
    labelWrapper: {},
    radio: {
        // background: blue_1,
        "&:checked": {
            background: "white",
            border: `5px solid ${blue_4}`,
        },
    },
    inner: {},
    icon: {},
    error: {},
    description: {},
    label: {},
});
