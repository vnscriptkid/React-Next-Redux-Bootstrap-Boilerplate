const withCSS = require("@zeit/next-css");
module.exports = withCSS({
    cssModules: true,
    // enalbe scoped css modules
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    }
}); 