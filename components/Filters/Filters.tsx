import { Box, CSSObject, MantineTheme } from "@mantine/core";
import { useState } from "react";
import FilterChoices from "./FilterChoices";
import FilterItem from "./FilterItem";
import Radio from "./Radio";
import Select from "./Select";
import Slider from "./Slider";

const Filters = ({}) => {
    const [value, setValue] = useState(0);
    const year = new Date().getFullYear();
    return (
        <Box>
            <Box>
                <FilterChoices />
                <FilterItem name='Rating'>
                    <Slider step={1} min={1} max={10} values={[1, 10]} />
                </FilterItem>
                <FilterItem name='Released'>
                    <Slider step={1} min={1960} max={year} values={[1960, year]} />
                </FilterItem>
                <FilterItem name='Genres'>
                    <Select />
                </FilterItem>
                <FilterItem name='Year of release'>
                    <Radio />
                </FilterItem>
            </Box>
        </Box>
    );
};

export default Filters;

export const filterText = (theme: MantineTheme): CSSObject => ({});
