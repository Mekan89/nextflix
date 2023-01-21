<<<<<<< HEAD
<<<<<<< HEAD
import { MantineThemeComponents } from "@mantine/styles/lib/theme/types/MantineTheme";

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
=======
export const dimmedColor_1 = "#333333";
export const dimmedColor_2 = "#999999";
=======
import { MantineThemeComponents } from "@mantine/styles/lib/theme/types/MantineTheme";
>>>>>>> a1cb2a4 (movie app main page)

export const components: MantineThemeComponents = {
    Container: {
        defaultProps: {
<<<<<<< HEAD
            sizes: {
                xl: 1420,
            },
>>>>>>> 624d06a (movie app main page)
=======
            // sizes: {
            //     xl: 1420,
            // },
            size: "xl",
>>>>>>> a1cb2a4 (movie app main page)
        },
        styles: {
            root: {
                padding: "0 50px",
                "@media (max-width: 800px)": {
                    padding: "0 20px",
                },
            },
        },
    },
<<<<<<< HEAD
<<<<<<< HEAD
    Button: {
        defaultProps: {
            size: "md",
        },
    },

=======
    Input: {
        styles: {
            input: {
                backgroundColor: dimmedColor_1,
                color: "#ffffff",
                borderColor: dimmedColor_1,
            },
        },
    },
>>>>>>> 624d06a (movie app main page)
=======
    Button: {
        defaultProps: {
            size: "md",
        },
    },

>>>>>>> a1cb2a4 (movie app main page)
    Footer: {
        styles: {
            root: {
                border: 0,
                backgroundColor: "#141414",
                color: "#fff",
<<<<<<< HEAD
<<<<<<< HEAD
                position: "static",
=======
>>>>>>> 624d06a (movie app main page)
=======
                position: "static",
>>>>>>> a1cb2a4 (movie app main page)
            },
        },
    },
    Header: {
        styles: {
            root: {
<<<<<<< HEAD
<<<<<<< HEAD
                position: "sticky",
                top: 0,
=======
>>>>>>> 624d06a (movie app main page)
=======
                position: "sticky",
                top: 0,
>>>>>>> 12a5725 (movie app main page)
                border: 0,
                backgroundColor: "#141414",
                color: "#fff",
            },
        },
    },
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a1cb2a4 (movie app main page)

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
<<<<<<< HEAD
=======
>>>>>>> 624d06a (movie app main page)
=======
>>>>>>> a1cb2a4 (movie app main page)
