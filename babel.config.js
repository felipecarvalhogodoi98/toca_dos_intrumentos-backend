module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "16.0",
          esmodules: true,
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties"],
    [
      "module-resolver",
      {
        alias: {
          "@controllers": "./src/controllers",
          "@entities": "./src/entities",
          "@services": "./src/services",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
