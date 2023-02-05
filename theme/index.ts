import { MantineThemeOverride } from "@mantine/core";
import { Fira_Sans } from "@next/font/google";
import { blue_1, white_3 } from "./colors";
import { components } from "./components";

export const fira_sans = Fira_Sans({
    weight: ["300", "400", "500", "700"],
    fallback: ["Helvetica", "Arial", "sans-serif"],
    preload: false,
});

const theme: MantineThemeOverride = {
    globalStyles: theme => ({
        body: {
            overflowX: "hidden",
            background: white_3,
            "&::selection": {
                color: "white",
                backgroundColor: blue_1,
            },
            // colorScheme: "light",
        },

        a: {
            textDecoration: "none",
        },
    }),
    colorScheme: "light",
    fontFamily: fira_sans.style.fontFamily,
    primaryColor: "blue",
    components,
};

export default theme;

// bgHeader + bgFooter ='#121212'
// search input, burger, burger dropdown = '#333333'
// backgroundPage = #f4f4f4
// btnColor - #005382

// search input, burger, burger dropdown = #292929
// hover: search = #3d3d3d
