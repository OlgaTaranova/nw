const path = require('path');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'index.html'),
    filename: 'index.html',
    inject: 'body'
});

module.exporst = {
    mode: "development", 
    entry: "./src/index.js",
    devtool: "eval",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'    
      },
    watch: true,
    devServer: { 
        inline:true,
        port: 4200,
        openPage: './index.html'
      },
    
    plugins: [],
    module: {
        rules: [
            {
              test: /\.m?js$/, // set file's extensions
              exclude: /(node_modules|bower_components)/, // files to ignore
              use: { // set type of loader
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ],

    },
}