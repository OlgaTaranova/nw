const path = require('path');

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