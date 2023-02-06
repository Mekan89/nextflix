import { MantineTheme, Radio as MantineRadio } from "@mantine/core";
import { useState } from "react";
import { blue_4 } from "../../theme/colors";

// interface Props {
//     value: string;
// }

const Radio = ({}) => {
    const [value, setValue] = useState("new");
    return (
        <MantineRadio.Group value={value} onChange={setValue} orientation='vertical' spacing='sm'>
            <MantineRadio value='new' label='New to Old' styles={radioStyles} />
            <MantineRadio value='old' label='Old to New' styles={radioStyles} />
        </MantineRadio.Group>
    );
};

export default Radio;

const radioStyles = (theme: MantineTheme) => ({
    body: {},
    labelWrapper: {},
    radio: {
        "&:checked": {
            background: "white",
            border: `5px solid ${blue_4}`,
        },
    },
});
