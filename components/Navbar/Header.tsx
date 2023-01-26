import { Container, Group, Header as MantineHeader, Text } from "@mantine/core";
import Link from "next/link";
import { navLink } from "../../theme/styles";
import BurgerMenu from "./Menu";
import Search from "./Search";

const Header = ({}) => {
    // const { classes } = useStyles();
    // const [scroll] = useWindowScroll();

    return (
        <MantineHeader fixed height={70}>
            <Container>
                <Group noWrap position='apart' h={70} pos='relative'>
                    <Group>
                        <BurgerMenu />
                        <Text component={Link} href='/' fz={26} c='blue.8' fw='bold'>
                            NEXTFLIX
                        </Text>
                    </Group>

                    <Search />
                    <Group>
                        {/* <ThemeToggle /> */}
                        <Text sx={navLink}>Login</Text>
                    </Group>
                </Group>
            </Container>
        </MantineHeader>
    );
};

export default Header;

{
    /* <Burger opened={opened} color='#a1a1a1' size={18} /> 

  <List bg='#fff' w={270} withPadding listStyleType='none' mt={300}>
 {items.map(({ title, route, icon }, index) => (
         <List.Item key={index} icon={icon}>
             {title}
         </List.Item>
     ))}
 </List> */
}

// export const menu = (theme: MantineTheme): CSSObject => ({
// position: "absolute",
// top: 0,
// });

// const useStyles = createStyles(theme => ({
//     left: {
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         paddingTop: 22,
//         paddingBottom: 22,
//         "@media (max-width: 768px)": {
//             width: "100%",
//             padding: 0,
//         },
//     },
//     link: {
//         position: "relative",
//         fontSize: "18px",
//         lineHeight: "18px",
//         fontWeight: 500,
//         color: "#fff",
//         outline: "none",
//         transition: "color 0.3s",
//         "@media (max-width: 768px)": {
//             fontSize: "15px",
//             lineHeight: "15px",
//             marginRight: "8px",
//         },
//     },

//     "&:before": {
//         content: '""',
//         position: "absolute",
//         bottom: "-8px",
//         left: 0,
//         width: "100%",
//         height: "2.5px",
//         borderRadius: "5px",
//         backgroundColor: "#fff",
//         opacity: 0,
//         visibility: "hidden",
//         transition: "opacity 0.3s, visibility 0.3s",
//     },

//     "&:hover &:focusVisible": {
//         "&:before": {
//             opacity: 1,
//             visibility: "visible",
//         },
//     },
//     "&:hover": {
//         color: "#fff",
//     },
// }));

// const dropdown = (theme: MantineTheme): CSSObject => ({
//     // position: "sticky",
//     // position: "fixed",
//     // top: 0,
//     zIndex: 1,
//     transition: "top 0.2s ease-in-out",
//     backgroundColor: "#1f1f1f",

//     // transition: "0.5s",
// });

// const root = (theme: MantineTheme): CSSObject => ({
//     position: "absolute",
//     top: 0,
//     zIndex: 10,
//     border: 0,
//     overflow: "hidden",
//     padding: "85px 25px 30px",
//     // color: "#d2d2d2",
//     color: "#f00",
//     // fontStyle: "#d2d2d2",
//     width: 240,

//     // [theme.fn.smallerThan("sm")]: {
//     //     display: "none",
//     // },
// });

// const menuStyle = (theme: MantineTheme): CSSObject => ({
//     backgroundColor: "#1f1f1f",
// });
