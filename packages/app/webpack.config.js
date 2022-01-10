const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require("path");

const deps = require("./package.json").dependencies;
const isProduction = process.env.NODE_ENV === 'production';
const folder = "./dist";

module.exports = {
	entry: "./src/index",
	mode: isProduction ? 'production' : 'development',
	target: ['web', 'es5'],
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, folder),
    	publicPath: "/",
		clean: true
  	},
	module: {
    	rules: [
      		{
        		test: /\.jsx?$/,
        		loader: "babel-loader",
        		exclude: /node_modules\/(?!(recoil)\/).*/,
      		}
    	],
  	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new ModuleFederationPlugin({
			name: "dictapp",
			library: { type: "var", name: "dictapp" },
			filename: "remoteEntry.js",
			exposes: {
				"./store": "./src/store/index.js",
				"./StoreContext": "./src/context/store.js",
				"./components/RemoteModule": "./src/components/RemoteModule.js"
			},
		  	shared: {
				...deps,
				react: {
					import: "react",
          			shareKey: "react",
          			shareScope: "default",
					singleton: true,
					requiredVersion: deps.react,
				},
				"react-dom": {
					singleton: true,
					requiredVersion: deps["react-dom"],
				},
			},
	  	}),
	],
	devtool: false
}