import { MantineThemeComponents } from "@mantine/styles/lib/theme/types/MantineTheme";
import { customColors } from "./styles";

export const components: MantineThemeComponents = {
    AppShell: {
        styles: {
            main: {
                padding: 0,
            },
        },
    },
    Container: {
        defaultProps: {
            // sizes: {
            //     xl: 1420,
            // },
            size: "xl",
            styles: {
                root: {
                    padding: "0 50px",
                    "@media (max-width: 800px)": {
                        padding: "0 20px",
                    },
                },
            },
        },
    },
    Button: {
        defaultProps: {
            size: "md",
        },
    },

    Input: {
        styles: {
            input: {
                backgroundColor: customColors.gray_1,
                color: "#ffffff",
                borderColor: customColors.gray_1,
            },
        },
    },
    Footer: {
        styles: {
            root: {
                border: 0,
                backgroundColor: "#141414",
                color: "#fff",
                position: "static",
            },
        },
    },
    Header: {
        styles: {
            root: {
                position: "sticky",
                top: 0,
                border: 0,
                backgroundColor: "#141414",
                color: "#fff",
            },
        },
    },
};

// Input: {
//     styles: (theme: MantineTheme, params: ButtonStylesParams) => ({
//         input: {
//             backgroundColor: theme.colors.gray_1,
//             color: "#ffffff",
//             borderColor: theme.colors.gray_2,
//         },
//         icon: {
//             color: "blue",
//         },
//         rightSection: {
//             color: "white",
//         },
//     }),
// },
// Button: {
//     styles: (theme: MantineTheme, params: ButtonStylesParams) => ({
//         root: {
//             color: params.variant === "outline" ? theme.colors.primary : theme.white,
//             borderColor: params.variant === "outline" && theme.colors.primary,
//             background: params.variant === "filled" ? theme.colors.primary : theme.white,

//             // ":hover": {
//             //     backgroundColor: theme.fn.darken(params.variant === "filled" ? theme.colors.primary : theme.colors.primary, 0.1 ),
//             // },
//         },
//     }),
// },
