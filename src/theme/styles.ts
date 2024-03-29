import { CSSObject, MantineTheme } from "@mantine/core";
import { blue_1 } from "./colors";

export const isActive = (theme: MantineTheme): CSSObject => ({
    position: "relative",
    "::after": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: 3,
        bottom: -5,
        left: 0,
        backgroundColor: blue_1,
    },
});

export const navLink = (theme: MantineTheme): CSSObject => ({
    position: "relative",
    cursor: "pointer",
    fontWeight: "bold",

    "::after": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: 3,
        bottom: -5,
        left: 0,
        backgroundColor: blue_1,
        transformOrigin: "bottom left",
        transition: "transform 0.25s ease-out",
        transform: "scaleX(0)",
    },
    ":hover::after": {
        transform: "scaleX(1)",
    },
});

// export const btnContained = (theme: MantineTheme): CSSObject => ({
//     backgroundColor: blue_1,
//     fontWeight: "bold",
//     "&:hover": {
//         color: theme.white,
//         backgroundColor: theme.fn.darken(blue_1, 0.2),
//     },
// });

// export const btnOutlined = (theme: MantineTheme): CSSObject => ({
//     backgroundColor: "white",
//     color: blue_1,
//     borderColor: blue_1,
//     fontWeight: "bold",
//     "&:hover": {
//         color: "white",
//         backgroundColor: blue_1,

//         // color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
//     },
// });
