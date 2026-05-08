import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages.
  output: "export",
  reactStrictMode: true,
  // GitHub Pages serves files from a path; turn off Next image optimisation
  // (which requires a server) and trailingSlash so /blogs/ resolves to
  // /blogs/index.html on a static host.
  images: { unoptimized: true },
  trailingSlash: true,
  // Note: headers() is not supported with output: "export". Set headers at
  // the host level (or via a meta http-equiv tag) if you need them.
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
