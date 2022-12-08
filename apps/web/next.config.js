// @wanted/ui 패키지를 transpile 시킨다.
const withTM = require('next-transpile-modules')(['@leejin/ui']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM(nextConfig);
