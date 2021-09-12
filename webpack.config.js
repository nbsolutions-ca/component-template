
const Path = require('path');

module.exports = (env, argv) => {
    return {
        entry: './src/api.ts',
        devtool: 'source-map',
        output: {
            path: Path.resolve(__dirname, './lib'),
            filename: 'component-template.js',
            library: {
                type: 'commonjs2'
            },
            clean: true
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                injectType: 'lazyStyleTag'
                            }
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                    exclude: /node_modules/,
                    include: Path.resolve(__dirname, 'src')
                },
                {
                    test: /\.ts|\.tsx$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        externals: {
            'react': 'react',
            '@nbsolutions/interfaces': '@nbsolutions/interfaces',
            '@nbsolutions/object': '@nbsolutions/object'
        },
        optimization: {
            minimize: false
        }
    };
};
