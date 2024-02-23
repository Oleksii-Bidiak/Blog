// module.exports = {
//     stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
//     addons: [
//         '@storybook/addon-links',
//         '@storybook/addon-essentials',
//         '@storybook/addon-interactions',
//     ],
//     framework: '@storybook/react',
//     core: {
//         builder: 'webpack5',
//     },
//     typescript: {
//         check: false,
//         checkOptions: {},
//         reactDocgen: false,
//         reactDocgenTypescriptOptions: {
//             shouldExtractLiteralValuesFromEnum: true,
//             propFilter: prop =>
//                 prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
//         },
//     },
// }

module.exports = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock/register',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
}
