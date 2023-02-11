import { Button, createStyles, Divider, Flex, Group, Image, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import Link from "next/link";
import { gray_1, white_1 } from "../theme/colors";
import Rating from "./Rating";

const MovieFilterCard = ({}) => {
    const { classes, cx } = useStyles();
    const theme = useMantineTheme();

    return (
        <>
            <Divider color={white_1} display={{ base: "none", md: "block" }} />
            <Link href='#' className={classes.wrapper}>
                <Group noWrap px={{ base: 0, md: 25 }} py={25}>
                    <Image src='/black.jpg' alt='Norway' radius='md' width={70} height={100} />
                    <Stack maw={430} spacing={4}>
                        <Title order={4} lineClamp={1}>
                            BTS Permission:
                        </Title>
                        <Text fz={{ base: 14, sm: 16 }} span>
                            2022, 195 min.
                        </Text>
                        <Text lineClamp={2} fz={14} c='dimmed'>
                            Появилось новое зло, и только Скотт Макколл может собрать новых союзников и старых друзей, чтобы дать ему отпор. Появилось новое зло, и только Скотт
                            Макколл может собрать новых союзников и старых друзей, чтобы дать ему отпор.
                        </Text>
                    </Stack>
                    <Flex align='center' direction={{ base: "column", sm: "row" }} gap={{ base: 10, sm: 20 }} ml='auto'>
                        {/* <Group position={{ xs: "center", md: "right" }} ml='auto'> */}
                        {/* <Group ml='auto' position='left'> */}
                        <Rating className={classes.rating} rating={5.9} />
                        <Button leftIcon={<IconBookmark fill={gray_1} size={16} />} className={classes.button}>
                            Watch later
                        </Button>
                        {/* </Group> */}
                    </Flex>
                </Group>
            </Link>
        </>
    );
};

export default MovieFilterCard;

const useStyles = createStyles(theme => ({
    wrapper: {
        display: "block",
        transition: "0.3s",
        [theme.fn.largerThan("md")]: {
            "&:hover": {
                boxShadow: "0 2px 25px rgba(0,0,0, 0.1)",
            },
        },
    },
    rating: {
        fontSize: 18,
        fontWeight: "bold",
    },
    button: {
        color: gray_1,
        borderColor: gray_1,
        fontSize: 14,
        background: "transparent",
        padding: "8px 12px",
        height: "fit-content",
        "&:hover": {
            background: "rgba(0,0,0,0.1)",
        },
        [theme.fn.smallerThan("sm")]: {
            padding: 10,
            [`& .mantine-Button-leftIcon`]: {
                margin: 0,
            },

            [`& .mantine-Button-label`]: {
                display: "none",
            },
        },
    },
}));
