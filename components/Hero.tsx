import { Box, Button, Container, createStyles, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons";
<<<<<<< HEAD
<<<<<<< HEAD
import { filledBtn } from "../theme/styles";

const useStyles = createStyles(theme => ({
    heroSection: {
        height: "450px",
=======

const useStyles = createStyles(theme => ({
    heroSection: {
        height: "400px",
>>>>>>> 624d06a (movie app main page)
=======
import { filledBtn } from "../theme/styles";

const useStyles = createStyles(theme => ({
    heroSection: {
        height: "450px",
>>>>>>> a1cb2a4 (movie app main page)
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
<<<<<<< HEAD
<<<<<<< HEAD
        height: "450px",
=======
        height: "400px",
>>>>>>> 624d06a (movie app main page)
=======
        height: "450px",
>>>>>>> a1cb2a4 (movie app main page)
        maxWidth: "460px",
        width: "100%",
    },
}));

const Hero = ({}) => {
    const { classes } = useStyles();

    return (
        <Box className={classes.heroSection}>
<<<<<<< HEAD
<<<<<<< HEAD
            <Container>
                <Stack spacing={35} c='white' className={classes.heroContent}>
                    <Title order={1}>Тор: Любовь и гром</Title>
                    <Text>Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота Мьёльнира.</Text>
                    <Button rightIcon={<IconArrowRight size={19} />} sx={filledBtn}>
                        More
=======
            <Container size='xl'>
                <Stack spacing='lg' c='white' className={classes.heroContent}>
                    <Title order={1}>Тор: Любовь и гром</Title>
                    <Text>Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота Мьёльнира.</Text>
                    <Button rightIcon={<IconArrowRight />} fw='bold'>
                        ...More
>>>>>>> 624d06a (movie app main page)
=======
            <Container>
                <Stack spacing={35} c='white' className={classes.heroContent}>
                    <Title order={1}>Тор: Любовь и гром</Title>
                    <Text>Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота Мьёльнира.</Text>
                    <Button rightIcon={<IconArrowRight size={19} />} sx={filledBtn}>
                        More
>>>>>>> a1cb2a4 (movie app main page)
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;
