const path = require("path");
const dotenv = require("dotenv");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { EsbuildPlugin } = require("esbuild-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

dotenv.config();

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[contenthash].js',
    publicPath: "http://localhost:3000/",
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.css', '.scss'],
    alias: {
      react: path.resolve('./node_modules/react')
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "main",
      filename: 'remoteEntry.js',
      remotes: {
        menu: `menu@${process.env.REACT_APP_MENU_URL}/remoteEntry.js`,
        tables: `tables@${process.env.REACT_APP_TABLES_URL}/remoteEntry.js`,
        modal_lib: `modal_lib@${process.env.REACT_APP_MODAL_LIB_URL}/remoteEntry.js`,
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^19.0.0" },
        "react-dom": { singleton: true, eager: true, requiredVersion: "^19.0.0" },
        zustand: { singleton: true, eager: true, requiredVersion: "^5.0.0" },
      },
      exposes: {
        "./modalTypes": "./@types/modalTypes.d.ts",
        "./modalStore": "./src/stores/modalStore",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Restaurant Demo App",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
    port: 3000,
    hot: true,
    liveReload: true,
    client: {
      overlay: true,
      webSocketURL: "ws://localhost:3000/ws",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
};
