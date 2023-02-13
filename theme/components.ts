import { MantineThemeComponents } from "@mantine/styles/lib/theme/types/MantineTheme";
import { blue_1, dark_2 } from "./colors";

export const components: MantineThemeComponents = {
    // AppShell: {
    //     styles: {
    //         body: {
    //             // display: "flex",
    //             // minHeight: "100%",
    //             // minHeight: "100vh",
    //             // flex: 1,
    //         },
    //         root: {
    //             // minHeight: "100%",
    //             // flex: 1,
    //             // minHeight: "min-content",
    //             // height: "100vh",
    //             // display: "flex",
    //             // flexDirection: "column",
    //             // justifyContent: "space-between",
    //             // overflowX: "hidden",
    //         },
    //         main: {
    //             padding: 0,
    //             // minHeight: "calc(100vh - 155px)", //Header + Footer height
    //             // flex: 1,
    //             // height: "100vh",
    //             // minHeight: "100%",
    //             // maxHeight: "100vh",
    //             // overflow: "auto",
    //             // height: "100%",
    //             // flex: "auto",
    //             // flexGrow: 1,
    //             // flex: "1 1 0",
    //             // display:flex,
    //         },
    //     },
    // },
    Container: {
        defaultProps: {
            size: "xl",
        },
        styles: {
            root: {
                // height: "fit-content",
                // minHeight: "100%",
                height: "100%",
                padding: "0 50px",
                "@media (max-width: 800px)": {
                    padding: "0 20px",
                },
            },
        },
    },
    Button: {
        defaultProps: {
            size: "md",
        },
        styles: {
            // "@media (max-width: 400px)": {
            root: {
                "&:hover": {},
            },
            // },
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
            },
        },
    },
    Header: {
        styles: {
            root: {
                position: "static",
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
