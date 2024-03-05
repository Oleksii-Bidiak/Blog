import babelRemovePropsId from '../../babel/babelRemovePropsId'
import { BuildOptions } from '../types/config'

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts|)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['@babel/plugin-transform-typescript', { isTsx }],
                    '@babel/plugin-transform-runtime',
                    isDev &&
                        isTsx && [
                            babelRemovePropsId,
                            {
                                props: ['data-testId'],
                            },
                        ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    }
}
