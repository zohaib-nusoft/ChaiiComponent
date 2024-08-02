// /** @type { import('@storybook/react-webpack5').StorybookConfig } */
// const config = {
//   stories: [
//     "../src/**/*.stories.tsx"
//   ],
//   addons: [
//     "@storybook/addon-webpack5-compiler-swc",
//     "@storybook/addon-onboarding",
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@chromatic-com/storybook",
//     "@storybook/addon-interactions",
//   ],
//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {},
//   },
// };
// export default config;

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

    return config;
  },
};
export default config;
