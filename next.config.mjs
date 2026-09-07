/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // Static export for GitHub Pages.
  output: "export",
  reactStrictMode: true,
  // Export images directly and write /blogs/index.html for static hosts.
  images: { unoptimized: true },
  trailingSlash: true,
  // Note: headers() is not supported with output: "export". Set headers at
  // the host level (or via a meta http-equiv tag) if you need them.
};

export default nextConfig;
