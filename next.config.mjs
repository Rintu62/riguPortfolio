/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Turn off the floating Next.js 'N' development indicator badge completely:
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'skillicons.dev' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'www.vectorlogo.zone' },
      { protocol: 'https', hostname: 'assets.softr-files.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'xevrion.dev' },
      { protocol: 'https', hostname: 'www.gurudes.tech' },
      { protocol: 'https', hostname: 'www.nikhilverse.pro' },
    ],
  },
};

export default nextConfig;
