/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackBuildWorker: true, // Ensure Webpack build worker is enabled
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(m?js|cjs)$/,
      include: [/node_modules\/undici/], // Explicitly target undici
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          cacheDirectory: true,
        },
      },
    });
    config.resolve.fullySpecified = false;
    return config;
  },
};

module.exports = nextConfig;