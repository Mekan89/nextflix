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
    Burger: {
        styles: {
            root: {
                color: "#a1a1a1",
                "&:hover": {
                    color: "white",
                },
            },
            burger: {
                color: "#a1a1a1",
                "&:hover": {
                    color: "white",
                },
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
    List: {
        defaultProps: {},
        styles: {
            root: {
                position: "absolute",
            },
        },
    },

    Menu: {
        defaultProps: {},
        styles: {
            dropdown: {
                backgroundColor: "#1f1f1f",
                border: 0,
                // marginLeft: 10,
            },
            itemIcon: {
                // color: "#f00",
            },
            itemLabel: {
                marginLeft: 10,
            },
            item: {
                background: "#1f1f1f",
                color: "#d3d3d3",
                transition: "0.3s",
                "&[data-hovered]": {
                    backgroundColor: "transparent",
                    color: "white",
                    fontWeight: "bold",

                    "& .itemIcon": {
                        position: "relative",
                        svg: {
                            color: "#f00",

                            "&::after": {
                                content: "''",
                                position: "absolute",
                                width: "100%",
                                height: 3,
                                bottom: 0,
                                left: 0,
                                backgroundColor: customColors.primary,
                            },
                        },
                    },
                },
            },
            // "&:hover": {
            //     backgroundColor: "#1f1f1f",
            //     label: {
            //         color: "#f00",
            //         borderRight: "2px solid #fff",

            //         // color: "#1f1f1f",
            //     },

            //     svg: {
            //         background: "#1f1f1f",

            //         color: "#ff0",
            //     },

            // label: {
            //     color: "#fff",
            // },
            // },

            //         itemIcon: {
            //             background: "#1f1f1f",
            //         },
            //         itemLabel: {
            //             background: "#1f1f1f",
            //         },
            //     },
            // },
        },
    },
};
