import { MantineTheme, Radio as MantineRadio, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { blue_4 } from "../../theme/colors";

// interface Props {
//     value: string;
// }

const Radio = ({}) => {
    const [value, setValue] = useState("new");
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

    return (
        <MantineRadio.Group value={value} onChange={setValue} orientation='horizontal' spacing={40}>
            <MantineRadio value='new' label='New to Old' styles={radioStyles} />
            <MantineRadio value='old' label='Old to New' styles={radioStyles} />
        </MantineRadio.Group>
    );
};

export default Radio;

const radioStyles = (theme: MantineTheme) => ({
    radio: {
        "&:checked": {
            background: "white",
            border: `5px solid ${blue_4}`,
        },
    },
});
