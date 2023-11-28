/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        domains: ["pixner.net", "res.cloudinary.com" , "oaidalleapiprodscus.blob.core.windows.net"],
    },
    swcMinify: true,
};

module.exports = nextConfig;
