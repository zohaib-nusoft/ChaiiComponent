const path = require("path");

module.exports = {
  entry: "./src/index.ts", // adjust the entry point as needed
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            issuer: /\.[jt]sx?$/, // For JavaScript/TypeScript files
            use: ["@svgr/webpack"], // Use @svgr/webpack for React components
          },
          {
            type: "asset/resource", // Use asset/resource (or file-loader) for img src
          },
        ],
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
