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
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

export function buildPlugins(
    paths: BuildPaths,
    isDev: boolean,
    apiUrl: string,
    project: string,
): WebpackPluginInstance[] {
    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    })
    const hotModuleReplacementPlugin = new HotModuleReplacementPlugin()
    const definePlugin = new DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
        __API__: JSON.stringify(apiUrl),
        __PROJECT__: JSON.stringify(project),
    })

    const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
        openAnalyzer: false,
    })

    const reactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin()

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new CopyPlugin({
            patterns: [{ from: paths.locales, to: paths.buildLocales }],
        }),
    ]

    if (isDev) {
        plugins.push(
            hotModuleReplacementPlugin,
            definePlugin,
            bundleAnalyzerPlugin,
            reactRefreshWebpackPlugin,
        )
    }

    if (!isDev) {
        plugins.push(miniCssExtractPlugin)
    }

    return plugins
}
