/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                pathname: '/products/images/**'
            }
        ]
    }
};

export default nextConfig;
