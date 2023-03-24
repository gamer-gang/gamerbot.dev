/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  webpack: (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.concat([
        // {
        //   test: /\.md$/,
        //   loader: 'emit-file-loader',
        //   options: {
        //     name: 'dist/[path][name].[ext]',
        //   },
        // },
        {
          test: /\.md$/,
          loader: 'raw-loader',
        },
      ]),
    },
  }),
}
