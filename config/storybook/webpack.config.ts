import { BuildPaths } from '../build/types/config'
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader/buildSvgLoader'

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    if (config.module?.rules !== undefined) {
        config.module.rules = config.module.rules.map(
            (rule: RuleSetRule | '...') => {
                if (
                    rule !== '...' &&
                    rule.test instanceof RegExp &&
                    rule.test.toString().includes('svg')
                ) {
                    return { ...rule, exclude: /\.svg$/i }
                }
                return rule
            },
        )
    }

    config.module?.rules?.push(buildCssLoader(true), buildSvgLoader())

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    )

    return config
}
