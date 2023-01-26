/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.pixabay.com"],
    },
    // experimental: {
    //     fontLoaders: [{ loader: "@next/font/google", options: { subsets: ["latin"] } }],
    // },
};

module.exports = nextConfig;
