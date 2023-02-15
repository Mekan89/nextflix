import { Box, Button, CSSObject, Flex, Group, Image, List, MantineTheme, Stack, Text, Title } from "@mantine/core";
import { IconBookmark, IconPlayerPlayFilled } from "@tabler/icons-react";
import { dark_2, white_1, white_2 } from "../theme/colors";
import { btnContained } from "../theme/styles";
import Rating from "./Rating";

const FilmInfo = ({}) => {
    return (
        <Flex direction={{ base: "column", sm: "row" }} gap={{ base: 21, md: 42 }} mb={20} mih={{ base: 950, sm: 500 }}>
            <Box pos='relative'>
                <Image src='/black.jpg' alt='Norway' radius='md' width={300} height={450} />
                <Rating rating={4.5} className={rating} />
            </Box>
            <Stack w='100%' display='block'>
                <Title>Dog Gone 2023</Title>
                <Group my={30}>
                    <Button leftIcon={<IconPlayerPlayFilled fill={dark_2} size={16} />} radius='xl' sx={btnContained} px={20} py={12}>
                        Watch
                    </Button>
                    <Button leftIcon={<IconBookmark fill={dark_2} size={18} />} radius='xl' sx={button} px={20} py={12}>
                        Watch later
                    </Button>
                </Group>
                <Title order={3} mb={15}>
                    About:
                </Title>

                <List listStyleType='none' size={15} spacing={20} display='inline-block' pos='unset'>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            Country :
                        </Text>
                        <Text span c={dark_2}>
                            USA
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            Genre:
                        </Text>
                        <Text span c={dark_2}>
                            fantastic, drama
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            Age:
                        </Text>
                        <Text span c={dark_2}>
                            USA
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            Budget:
                        </Text>
                        <Text span c={dark_2}>
                            USA
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            Length:
                        </Text>
                        <Text span c={dark_2}>
                            USA
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            USA income:
                        </Text>
                        <Text span c={dark_2}>
                            USA
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            World income:
                        </Text>
                        <Text span c={dark_2}>
                            USA
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            World income:
                        </Text>
                        <Text span c={dark_2}>
                            USA
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            World income:
                        </Text>
                        <Text span c={dark_2}>
                            USA
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            World income:
                        </Text>
                        <Text span c={dark_2}>
                            USA
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            World income:
                        </Text>
                        <Text span c={dark_2}>
                            USA
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text span w={170} opacity={0.5} display='inline-block'>
                            World income:
                        </Text>
                        <Text span c={dark_2}>
                            USA
                        </Text>
                    </List.Item>
                </List>
            </Stack>
        </Flex>
    );
};

export default FilmInfo;

const rating = (theme: MantineTheme): CSSObject => ({
    position: "absolute",
    top: theme.spacing.md,
    left: theme.spacing.md,
    width: 37,
    display: "flex",
    justifyContent: "center",
    background: "green",
    color: theme.white,
    fontWeight: "bold",
    padding: "5px 10px",
    borderRadius: theme.radius.md,
});

const button = (theme: MantineTheme): CSSObject => ({
    color: dark_2,
    background: white_2,
    "&:hover": {
        background: white_1,
    },
});

{
    /* 
                <Flex justify='space-between' w={170}>
                    <Text opacity={0.5}>Country :</Text>
                    <Text span c={dark_2}>
                        USA
                    </Text>
                </Flex>
                <Flex justify='space-between' w={170}>
                    <Text opacity={0.5}>Country :</Text>
                    <Text span c={dark_2}>
                        USA
                    </Text>
                </Flex>
                <Flex justify='space-between' w={170}>
                    <Text opacity={0.5}>Country :</Text>
                    <Text span c={dark_2}>
                        USA
                    </Text>
                </Flex>
                <Flex justify='space-between' w={170}>
                    <Text opacity={0.5}>Country :</Text>
                    <Text span c={dark_2}>
                        USA
                    </Text>
                </Flex>
                <Flex justify='space-between' w={170}>
                    <Text opacity={0.5}>Country :</Text>
                    <Text span c={dark_2}>
                        USA
                    </Text>
                </Flex>
                <Flex justify='space-between' w={170}>
                    <Text opacity={0.5}>Country :</Text>
                    <Text span c={dark_2}>
                        USA
                    </Text>
                </Flex>
                <Flex justify='space-between' w={170}>
                    <Text opacity={0.5}>Country :</Text>
                    <Text span c={dark_2}>
                        USA
                    </Text>
                </Flex>
                <Flex justify='space-between' w={170}>
                    <Text opacity={0.5}>Country :</Text>
                    <Text span c={dark_2}>
                        USA
                    </Text>
                </Flex>
                <Flex justify='space-between' w={170}>
                    <Text opacity={0.5}>Country :</Text>
                    <Text span c={dark_2}>
                        USA
                    </Text>
                </Flex>
                <Flex justify='space-between' w={170}>
                    <Text opacity={0.5}>Country :</Text>
                    <Text span c={dark_2}>
                        USA
                    </Text>
                </Flex>
                <Flex justify='space-between' w={170}>
                    <Text opacity={0.5}>Country :</Text>
                    <Text span c={dark_2}>
                        USA
                    </Text>
                </Flex> */
}
