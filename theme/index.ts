import { MantineThemeOverride } from "@mantine/core";
import { Fira_Sans } from "@next/font/google";
<<<<<<< HEAD
<<<<<<< HEAD
import { components } from "./components";
=======
import { componentStyles } from "./components";
>>>>>>> 624d06a (movie app main page)
=======
import { components } from "./components";
>>>>>>> a1cb2a4 (movie app main page)

export const fira_sans = Fira_Sans({
    weight: ["300", "400", "500", "700"],
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme: MantineThemeOverride = {
    globalStyles: theme => ({
        body: {
            overflowX: "hidden",
            // background: theme.colors.gray[1],
            // colorScheme: "light",
        },
    }),
    colorScheme: "light",
    fontFamily: fira_sans.style.fontFamily,
    primaryColor: "blue",
<<<<<<< HEAD

<<<<<<< HEAD
    components,
=======
    components: componentStyles,
>>>>>>> 624d06a (movie app main page)
=======
    components,
>>>>>>> a1cb2a4 (movie app main page)
};

export default theme;

// bgHeader + bgFooter ='#121212'
// search input, burger, burger dropdown = '#333333'
// backgroundPage = #f4f4f4
// btnColor - #005382

// search input, burger, burger dropdown = #292929
// hover: search = #3d3d3d
