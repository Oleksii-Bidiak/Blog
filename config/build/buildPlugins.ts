import HTMLWebpackPlugin from 'html-webpack-plugin'
import {
    DefinePlugin,
    HotModuleReplacementPlugin,
    ProgressPlugin,
    WebpackPluginInstance,
} from 'webpack'
import { BuildPaths } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins(
    paths: BuildPaths,
    isDev: boolean,
): WebpackPluginInstance[] {
    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    })
    const hotModuleReplacementPlugin = new HotModuleReplacementPlugin()
    const definePlugin = new DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
    })

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new BundleAnalyzerPlugin(),
    ]

    if (isDev) {
        plugins.push(hotModuleReplacementPlugin, definePlugin)
    }

    if (!isDev) {
        plugins.push(miniCssExtractPlugin)
    }

    return plugins
}
