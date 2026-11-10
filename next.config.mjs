/** @type {import('next').NextConfig} */
const nextConfig={typescript:{ignoreBuildErrors:true},images:{unoptimized:true},async redirects(){return [{source:"/:path*",has:[{type:"host",value:"shashidharsharma.com"}],destination:"https://www.shashidhar-sharma.com/:path*",permanent:true}]}}
export default nextConfig
