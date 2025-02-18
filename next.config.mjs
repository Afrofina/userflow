/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/",
            destination: "/ecom/auth/sign-in",
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
