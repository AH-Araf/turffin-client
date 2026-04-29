/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/dashboard/user/user-dashboard",
        destination: "/dashboard/user",
        permanent: true,
      },
      {
        source: "/dashboard/user/user-bookings",
        destination: "/dashboard/user/bookings",
        permanent: true,
      },
      {
        source: "/dashboard/user/my-profile",
        destination: "/dashboard/user/profile",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
