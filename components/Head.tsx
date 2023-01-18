import NextHead from "next/head";

interface Props {
    title?: string;
}

const Head = ({ title = "Flixnet" }: Props) => {
    return (
        <NextHead>
            <title>{title}</title>
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
            <meta name='description' content='Movie app using TMDB API' />
            <link rel='icon' href='/favicon.ico' />
        </NextHead>
    );
};

export default Head;
