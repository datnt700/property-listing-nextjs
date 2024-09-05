/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'csyxkpbavpcrhwqhcpyy.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
