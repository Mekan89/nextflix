import { Group, MantineTheme, NumberInput, RangeSlider } from "@mantine/core";
import { useState } from "react";

interface SliderProps {
    min: number;
    max: number;
    values: number[];
    step?: number;
    onChange?: (values: number[]) => void;
}

const Slider = ({ min, max, values, step, onChange }: SliderProps) => {
    const [rangeValue, setRangeValue] = useState([0, 10]);
    return (
        <>
            <Group grow mb={25}>
                <NumberInput label='From' styles={numberInput} min={min} max={max} value={values[0]} defaultValue={min} />
                <NumberInput label='To' styles={numberInput} min={min} max={max} value={values[1]} defaultValue={max} />
            </Group>

            <RangeSlider step={step} min={min} max={max} onChange={onChange} styles={slider} size={3} color='blue.9' />
        </>
    );
};

export default Slider;

const slider = (theme: MantineTheme) => ({
    thumb: {
        height: 16,
        width: 16,
        backgroundColor: theme.white,
        borderWidth: 0,
        boxShadow: "0 1px 2px rgba(0,0,0,0.5)",
    },
    dragging: {
        boxShadow: "0 1px 2px rgba(0,0,0,0.8)",
    },
    label: {},
    markWrapper: {},
    mark: {
        width: 3,
        height: 3,
    },
    markFilled: {},
    markLabel: {},
});

export const numberInput = (theme: MantineTheme) => ({
    root: {
        "&:hover .mantine-NumberInput-rightSection": {
            display: "block",
        },
    },
    rightSection: {
        display: "none",
    },
});
