const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const LoadablePlugin = require("@loadable/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default;

const devMode = process.env.NODE_ENV !== "production";
const styledComponentsTransformer = createStyledComponentsTransformer();
// 개발환경에서 hot-reload 가능하게 함.
const hoeMiddlewareScript = `webpack-hot-middleware/client?name=web&path=/__webpack_hmr&timeout=20000&reload=true`;

// target : web / node
const getEntryPoint = target => {
  if (target === "node") {
    return ["./src/App.tsx"];
  }
  return devMode ? [hoeMiddlewareScript, "./src/index.tsx"] : ["./src/index.tsx"];
};

const getConfig = target => ({
  mode: devMode ? "development" : "production",
  name: target,
  target,
  entry: getEntryPoint(target),
  output: {
    path: path.resolve(__dirname, `dist/${target}`),
    filename: "[name].js",
    publicPath: "/web/",
    libraryTarget: target === "node" ? "commonjs2" : undefined,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      pages: path.resolve("src/pages/"),
      components: path.resolve("src/components/"),
      actions: path.resolve("src/store/actions/"),
      reducers: path.resolve("src/store/reducers/"),
      util: path.resolve("src/util/"),
    },
  },

  plugins:
    target === "web"
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [new LoadablePlugin(), new MiniCssExtractPlugin(), new webpack.HotModuleReplacementPlugin()]
      : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [new LoadablePlugin(), new MiniCssExtractPlugin()],

  externals: target === "node" ? ["@loadable/component", nodeExternals()] : undefined,
});

// 하나의 webpack config로 server-side 파일(node)와 client-side 파일(web)을 동시에 compile
module.exports = [getConfig("web"), getConfig("node")];
