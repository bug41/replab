/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",                
            },
            {
                protocol: "https",
                hostname: "source.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "assets.vercel.com",                
            }
        ]
    }
}

module.exports = nextConfig
