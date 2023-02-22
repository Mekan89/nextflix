import { Box, Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { btnContained, btnOutlined } from "../../theme/styles";
import FilterChoices from "./FilterChoices";
import FilterItem from "./FilterItem";
import Radio from "./Radio";
import Select from "./Select";
import Slider from "./Slider";

const Filters = ({}) => {
    const [value, setValue] = useState(0);
    const year = new Date().getFullYear();

    // const { register, handleSubmit, control, getValues, reset } = useForm({
    //     defaultValues: {
    //         sort: "-1",
    //         // genres: genres[0],
    //         rating: [1, 10],
    //         year: [1960, year],
    //     },
    // });

    // const onSubmit = handleSubmit(data => {
    //     const { sort, rating, year, genres } = data;

    //     const ratingString = `${rating[0]}-${rating[1]}`;
    //     const yearString = `${year[0]}-${year[1]}`;
    //     const ratings = rating[0] !== rating[1] ? ratingString : rating[0];
    //     const years = year[0] !== year[1] ? yearString : year[0];
    //     const genre = genres.value !== "" ? `search[]=${genres.value}&field[]=genres.name` : "";

    // setPage(1);
    // setFilterRatings(ratings);
    // setFiterYears(years);
    // setSortByRelease(sort);
    // setFilterGenre(genre);
    // handleClose();
    // });

    // const handleReset = () => {
    //     resetFilters();
    //     reset();
    // };

    useEffect(() => {
        // handleReset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <Box component='form' onSubmit={handleSubmit} pos='sticky' top={50}>
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
        </Box>
    );
};

export default Filters;
