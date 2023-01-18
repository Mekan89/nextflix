import { CSSObject, MantineTheme } from "@mantine/core";

export const navLink = ({ colors, colorScheme, fn, shadows }: MantineTheme): CSSObject => ({
    position: "relative",
    cursor: "pointer",
    "::after": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: 3,
        bottom: -5,
        left: 0,
        backgroundColor: colors.blue,
        transformOrigin: "bottom left",
        transition: "transform 0.25s ease-out",
        transform: "scaleX(0)",
    },
    ":hover::after": {
        transform: "scaleX(1)",
    },
});

// button: {
//     "&, &:hover": {
//         backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
//         color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
//     },
// },
