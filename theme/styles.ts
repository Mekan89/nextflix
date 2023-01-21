import { CSSObject, MantineTheme } from "@mantine/core";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a1cb2a4 (movie app main page)
export const customColors = {
    dark: "#0a1016",

    offWhite: "#ffffffcc",
    gray_1: "#999999",
    gray_2: "#333333",
    primary: "#005382",
    primaryDark: "#003f63",
};

export const searchInput = (theme: MantineTheme): CSSObject => ({
    input: {
        backgroundColor: customColors.gray_2,
        color: "#ffffff",
        borderColor: customColors.gray_2,
    },
});

export const navLink = (theme: MantineTheme): CSSObject => ({
<<<<<<< HEAD
    position: "relative",
    cursor: "pointer",
    fontWeight: "bold",
=======
export const navLink = ({ colors, colorScheme, fn, shadows }: MantineTheme): CSSObject => ({
    position: "relative",
    cursor: "pointer",
>>>>>>> 624d06a (movie app main page)
=======
    position: "relative",
    cursor: "pointer",
    fontWeight: "bold",
>>>>>>> a1cb2a4 (movie app main page)
    "::after": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: 3,
        bottom: -5,
        left: 0,
<<<<<<< HEAD
<<<<<<< HEAD
        backgroundColor: customColors.primary,
=======
        backgroundColor: colors.blue,
>>>>>>> 624d06a (movie app main page)
=======
        backgroundColor: customColors.primary,
>>>>>>> a1cb2a4 (movie app main page)
        transformOrigin: "bottom left",
        transition: "transform 0.25s ease-out",
        transform: "scaleX(0)",
    },
    ":hover::after": {
        transform: "scaleX(1)",
    },
});

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a1cb2a4 (movie app main page)
export const filledBtn = (theme: MantineTheme): CSSObject => ({
    backgroundColor: customColors.primary,
    transition: "0.3s",
    fontWeight: "bold",
    "&:hover": {
        color: theme.white,
        backgroundColor: theme.fn.darken(customColors.primary, 0.2),
    },
});

export const outlineBtn = (theme: MantineTheme): CSSObject => ({
    backgroundColor: "white",
    color: customColors.primary,
    transition: "0.3s",
    fontWeight: "bold",
    "&:hover": {
        color: "white",
        backgroundColor: customColors.primary,

        // color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
    },
});

// styles: (theme: MantineTheme, params: ButtonStylesParams) => ({
//     root: {
//         color: params.variant === "outline" ? theme.colors.primary : theme.white,
//         borderColor: params.variant === "outline" && theme.colors.primary,
//         background: params.variant === "filled" ? theme.colors.primary : theme.white,

//         // ":hover": {
//         //     backgroundColor: theme.fn.darken(params.variant === "filled" ? theme.colors.primary : theme.colors.primary, 0.1 ),
//         // },
<<<<<<< HEAD
//     },
// }),
=======
// button: {
//     "&, &:hover": {
//         backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
//         color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
//     },
// },
>>>>>>> 624d06a (movie app main page)
=======
//     },
// }),
>>>>>>> a1cb2a4 (movie app main page)
