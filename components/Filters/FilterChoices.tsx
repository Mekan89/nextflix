import { CSSObject, MantineTheme, Stack, Text } from "@mantine/core";
import { gray_1 } from "../../theme/colors";

const FilterChoices = ({}) => {
    return (
        <Stack spacing={10} mb={20}>
            <Text sx={chip}>Rating: 1-10</Text>
            <Text sx={chip}>Year: 1960-2023</Text>
            <Text sx={chip}>Genre: All genres </Text>
            <Text sx={chip}>Order: New to Old</Text>
        </Stack>
    );
};

export default FilterChoices;

export const chip = (theme: MantineTheme): CSSObject => ({
    border: `1px solid ${gray_1}`,
    width: "fit-content",
    borderRadius: 5,
    padding: "3px 8px",
    fontSize: 14,
});
