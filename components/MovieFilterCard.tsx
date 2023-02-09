import { Button, createStyles, Divider, Group, Image, Stack, Text, Title } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import Link from "next/link";
import { gray_1, white_1 } from "../theme/colors";
import Rating from "./Rating";

const MovieFilterCard = ({}) => {
    const { classes, cx } = useStyles();

    return (
        <>
            <Divider color={white_1} />
            <Link href='#' className={classes.wrapper}>
                <Group noWrap>
                    <Image src='/black.jpg' alt='Norway' radius='md' width={70} height={100} />
                    <Stack maw={430} spacing={4}>
                        <Title order={4} lineClamp={1}>
                            BTS Permission:
                        </Title>
                        <Text fz={16} span>
                            2022, 195 min.
                        </Text>
                        <Text lineClamp={2} fz={14} c='dimmed'>
                            Появилось новое зло, и только Скотт Макколл может собрать новых союзников и старых друзей, чтобы дать ему отпор. Появилось новое зло, и только Скотт
                            Макколл может собрать новых союзников и старых друзей, чтобы дать ему отпор.
                        </Text>
                    </Stack>
                    <Rating className={classes.rating} rating={5.9} />
                    <Button leftIcon={<IconBookmark fill={gray_1} size={16} />} className={classes.button}>
                        Watch later
                    </Button>
                </Group>
            </Link>
        </>
    );
};

export default MovieFilterCard;

const useStyles = createStyles(theme => ({
    wrapper: {
        color: "inherit",
        display: "block",
        padding: 25,
        transition: "0.3s",
        "&:hover": {
            boxShadow: "0 2px 25px rgba(0,0,0, 0.1)",

            // boxShadow: theme.shadows.lg,
            // backgroundColor: dark_2,
        },
    },

    rating: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: "auto",
    },

    button: {
        color: gray_1,
        borderColor: gray_1,
        fontSize: 14,
        background: "transparent",
        padding: "8px 12px",
        height: "fit-content",
        transition: "background 0.2s ease-in ",
        "&:hover": {
            background: "rgba(0,0,0,0.1)",
        },
    },
}));
