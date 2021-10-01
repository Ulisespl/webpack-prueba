
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            sources: false
                        }
                    }
                ]
            }
        ]
    },

    optimization: {

    },

    plugins: [
        new htmlWebPackPlugin({
            title: 'Mi WevPackApp',
            template: './src/index.html',
            filename: './index.html'
        }),
    ]


}