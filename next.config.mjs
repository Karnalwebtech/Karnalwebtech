/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true, // Helps in identifying React-related issues
  swcMinify: true,       // Enables faster minification with SWC
  experimental: {
    optimizeCss: true,    // Optimizes CSS (experimental)
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/**", // Allow Firebase Storage paths
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/sitemap.xml',
  //       destination: '/api/sitemap',
  //     },
  //   ];
  // },
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "/504",
        statusCode: 307,
        has: [
          {
            type: "header",
            key: "x-middleware-rewrite",
            value: "(?<!/504)",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
