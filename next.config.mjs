/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'images.pexels.com'
            },
            {
                protocol:'https',
                hostname:'th.bing.com'
            },
            {
                protocol:'https',
                hostname:'image.api.playstation.com'
            },
            {
                protocol:'https',
                hostname:'ix-www.imgix.net'
            }
        ]
    }
};

export default nextConfig;
