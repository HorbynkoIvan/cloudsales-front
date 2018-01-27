var path = require("path");

var baseConfig = {
    devtool: "sourcemaps",
    cache: false,
    debug: true,
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: "babel-loader"
            }
        ]
    }
};

var shoppieHomepageConfig = Object.assign({}, baseConfig, {
    entry: "./src/main/javascript/AdminApplication.js",
    output: {
        path: __dirname,
        filename: "./src/main/resources/static/built/admin-application-bundle.min.js"
    }
});

module.exports = shoppieHomepageConfig;