/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.pixabay.com"],
        domains: ["image.tmdb.org"],
    },
    // experimental: {
    //     fontLoaders: [{ loader: "@next/font/google", options: { subsets: ["latin"] } }],
    // },
};

module.exports = nextConfig;
