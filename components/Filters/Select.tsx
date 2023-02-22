import { MantineTheme, Select as MantineSelect } from "@mantine/core";
import { useState } from "react";
import { blue_1 } from "../../theme/colors";

// type SelectValue = {
//     label: string;
//     value: string;
// };

// remove ? value from onChange
interface Props {
    // options?: SelectValue[];
    // onChange?: (e: unknown) => void;
    // value?: SelectValue | unknown;
    // name?: string;
}

// const Select = ({ onChange, value, name }: Props) => {
const Select = () => {
    const [value, setValue] = useState<string | null>("all");
    const genres = [
        { label: "All genres", value: "all" },
        { label: "Action", value: "action" },
        { label: "Animation", value: "animation" },
        { label: "Crime", value: "crime" },
        { label: "Drama", value: "drama" },
        { label: "Fantasy", value: "fantasy" },
        { label: "Horror", value: "horror" },
        { label: "Romance", value: "romance" },
        { label: "Western", value: "western" },
        { label: "Adventure", value: "adventure" },
        { label: "Comedy", value: "comedy" },
        { label: "Documentary", value: "documentary" },
        { label: "Family", value: "family" },
        { label: "History", value: "history" },
        { label: "Music", value: "Mmsic" },
        { label: "Mystery", value: "mystery" },
        { label: "Science Fiction", value: "science fiction" },
        { label: "Thriller", value: "thriller" },
        { label: "War", value: "war" },
    ];

    return (
        <>
            <MantineSelect defaultValue={value} value={value} onChange={setValue} data={genres} styles={selectStyle} nothingFound='No options' />
        </>
    );
};

export default Select;

const selectStyle = (theme: MantineTheme) => ({
    item: {
        "&[data-selected]": {
            background: blue_1,
            color: "white",
            "&, &:hover": {
                backgroundColor: blue_1,
            },
        },
    },
});
