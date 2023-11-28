/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'pixner.net',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: "oaidalleapiprodscus.blob.core.windows.net",
                pathname: '**',
            }
        ],
    },
    swcMinify: true,
};

module.exports = nextConfig;
