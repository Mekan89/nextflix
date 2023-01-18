export const dimmedColor_1 = "#333333";
export const dimmedColor_2 = "#999999";

export const componentStyles = {
    Container: {
        defaultProps: {
            sizes: {
                xl: 1420,
            },
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
    Input: {
        styles: {
            input: {
                backgroundColor: dimmedColor_1,
                color: "#ffffff",
                borderColor: dimmedColor_1,
            },
        },
    },
    Footer: {
        styles: {
            root: {
                border: 0,
                backgroundColor: "#141414",
                color: "#fff",
            },
        },
    },
    Header: {
        styles: {
            root: {
                border: 0,
                backgroundColor: "#141414",
                color: "#fff",
            },
        },
    },
};
