import { MantineThemeComponents } from "@mantine/styles/lib/theme/types/MantineTheme";
import { blue_1, dark_2 } from "./colors";

export const components: MantineThemeComponents = {
    AppShell: {
        styles: {
            main: {
                padding: 0,
                // height: "calc(100vh - 170px)", //Header + Footer height
                // flexGrow: 1,
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

    // Input: {
    //     styles: {
    //         input: {
    //             backgroundColor: gray_1,
    //             color: "#ffffff",
    //             borderColor: gray_1,
    //         },
    //     },
    // },
    Footer: {
        styles: {
            root: {
                border: 0,
                backgroundColor: dark_2,
                color: "#fff",
                // marginTop: "30px",
                position: "sticky",
                top: "100vh",
                bottom: 0,
                left: 0,
                right: 0,
            },
        },
    },
    Header: {
        styles: {
            root: {
                position: "sticky",
                top: 0,
                border: 0,
                backgroundColor: dark_2,
                color: "#fff",
            },
        },
    },
    List: {
        defaultProps: {},
        styles: {
            root: {
                position: "absolute",
            },
        },
    },
    Text: {
        styles: {
            root: {
                "&::selection": {
                    color: "white",
                    background: blue_1,
                },
            },
        },
    },

    Menu: {
        styles: {
            // dropdown: {
            //     backgroundColor: menu_bg,
            //     border: 0,
            // },
            // item: {
            //     background: menu_bg,
            //     color: "#d3d3d3",
            //     transition: "0.3s",
            //     "&[data-hovered]": {
            //         background: "transparent",
            //         color: "white",
            //         fontWeight: "bold",
            //     },
            // },
            // itemIcon: {
            //     position: "relative",
            //     "::after": {
            //         content: "''",
            //         position: "absolute",
            //         width: "100%",
            //         height: 3,
            //         bottom: -7,
            //         left: 0,
            //         backgroundColor: customColors.primary,
            //         transformOrigin: "bottom left",
            //         transition: "transform 0.2s ease-out",
            //         transform: "scaleX(0)",
            //     },
            //     ".mantine-Menu-item:hover &::after": {
            //         transform: "scaleX(1)",
            //     },
            // },
            // itemLabel: {
            //     marginLeft: 10,
            // },
        },
    },
};
