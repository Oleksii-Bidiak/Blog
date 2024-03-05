import { BuildOptions } from './types/config'
import { RuleSetRule } from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { isDev } = options
    const svgLoader = buildSvgLoader()

    const codeBbelLoader = buildBabelLoader({ ...options, isTsx: false })
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const cssLoader = buildCssLoader(isDev)

    //  const typescriptLoader = {
    //      test: /\.tsx?$/,
    //      use: 'ts-loader',
    //      exclude: /node_modules/,
    //  }

    return [
        fileLoader,
        svgLoader,
        codeBbelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        cssLoader,
    ]
}
