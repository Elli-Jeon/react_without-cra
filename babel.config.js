module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "react-hot-loader/babel",
    // for absolute import
    [
      "module-resolver",
      {
        cwd: "babelrc",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        root: ["."],
      },
    ],
  ],
};
