import { Button } from "@mantine/core";
import { useState } from "react";
import { btnContained, btnOutlined } from "../../theme/styles";
import FilterChoices from "./FilterChoices";
import FilterItem from "./FilterItem";
import Radio from "./Radio";
import Select from "./Select";
import Slider from "./Slider";

const Filters = ({}) => {
    const [value, setValue] = useState(0);
    const year = new Date().getFullYear();
    return (
        <>
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
            <Button sx={btnContained} fullWidth mt={30} mb={15}>
                Apply
            </Button>
            <Button sx={btnOutlined} fullWidth>
                Reset
            </Button>
        </>
    );
};

export default Filters;
