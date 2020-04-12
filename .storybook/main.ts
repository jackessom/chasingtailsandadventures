// @ts-ignore
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, "./tsconfig.json"),
        },
      },
    },
  ],
};
