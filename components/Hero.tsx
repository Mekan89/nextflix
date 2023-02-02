import { Box, Button, Container, createStyles, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { filledBtn } from "../theme/styles";

const useStyles = createStyles(theme => ({
    heroSection: {
        height: "470px",
        width: "99.5vw",
        position: "relative",
        backgroundImage: "url(/bg1.jpg)",
        backgroundPosition: "center 20%",
        backgroundSize: "cover",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
    },
    heroContent: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 10,
        alignItems: "flex-start",
        justifyContent: "center",
        height: "450px",
        maxWidth: "460px",
        width: "100%",
    },
}));

const Hero = ({}) => {
    const { classes } = useStyles();

    return (
        <Box className={classes.heroSection}>
            <Container>
                <Stack spacing={35} c='white' className={classes.heroContent}>
                    <Title order={1}>Тор: Любовь и гром</Title>
                    <Text>Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота Мьёльнира.</Text>
                    <Button component={Link} href={"film/1282688"} rightIcon={<IconArrowRight size={19} />} sx={filledBtn}>
                        More
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;
