import { CSSObject, MantineTheme } from "@mantine/core";

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
        backgroundColor: customColors.primary,
        transformOrigin: "bottom left",
        transition: "transform 0.25s ease-out",
        transform: "scaleX(0)",
    },
    ":hover::after": {
        transform: "scaleX(1)",
    },
});

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

//     },
// }),

// button: {
//     "&, &:hover": {
//         backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
//         color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
//     },
// },

//     },
// }),
