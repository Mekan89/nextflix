import { Badge, Col, createStyles, Group, Image, Text } from "@mantine/core";
import Rating from "./Rating";

const useStyles = createStyles(theme => ({
    wrapper: {
        marginBottom: theme.spacing.xl,
        position: "relative",
        cursor: "pointer",
        display: "block",
        "&:hover img, &:hover>div:nth-of-type(2)": {
            transition: "0.3s",
            transform: "translateY(-4px)",
            filter: "brightness(70%)",
        },
    },
    badge: {
        position: "absolute",
        top: theme.spacing.md,
        left: theme.spacing.md,
        color: theme.white,
        fontWeight: "bold",
        borderRadius: theme.radius.md,
        width: 37,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        background: "green",
        padding: "5px 10px",
    },
}));

const MovieCard = ({}) => {
    const { classes } = useStyles();

    return (
        // <Link href={`/film/${id}`}>
        <Col span={6} xs={4} sm={3} md={2.4} className={classes.wrapper}>
            <Image src='/black.jpg' alt='Norway' radius='md' />
            <Rating className={classes.badge} rating={4.9} />
            <Text weight={700} truncate mt='sm'>
                Norway Adventures
            </Text>
            <Group mt='xs'>
                <Text fz='sm' fw={500} c='dimmed' mt={-2}>
                    2020
                </Text>
                <Badge color='pink' variant='light'>
                    Movie
                </Badge>
            </Group>
        </Col>
    );
};

export default MovieCard;

{
    /* <Flex sx={{ ml: { xs: "auto", md: 0 } }}>
            {visible && <ArrowBackIosIcon sx={{ display: { xs: "none", md: "block" } }} onClick={() => setVisible(false)} />}
            {visible && <TextField variant='standard' autoFocus={visible} onBlur={() => setVisible(false)} />}
            <OutlinedInput sx={{ display: { xs: "none", md: "block" }, width: { xs: 250, md: 350 } }} placeholder='Search...' />
            <IconButton onClick={findMovie}>
                <Search />
            </IconButton>
        </Flex> */
}
