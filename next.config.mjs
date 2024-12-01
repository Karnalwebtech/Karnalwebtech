/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
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
