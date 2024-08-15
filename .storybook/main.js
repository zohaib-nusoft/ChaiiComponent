/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require("path");

const config = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"], // Add this line to serve static files from the public directory
  webpackFinal: async (config) => {
    // Add SCSS rule
    config.module.rules.push({
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
      include: path.resolve(__dirname, "../src"),
    });

    // Add rule for handling images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      ],
      include: path.resolve(__dirname, "../src"),
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
      include: path.resolve(__dirname, "../src"),
    });

    return config;
  },
};

export default config;
